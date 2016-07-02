'use strict'

import templateToHTML from '../tools/templateToHTML.js'
import message_templates from '../resources/strings.js'
import Emitter from 'emitter'
import $ from 'jquery'

class StatusBar {
  constructor(container) {
    this.container = container

    this.element = this.container.append($(
      `<div id="status_bar" class="bar bar-top-border bar-bottom-border flex-row center-align"><span id="status_msg" class="title small-title"></span></div>`
    ))

    this.status_msg = this.element.find('#status_msg')

    this.setTitle('Listo')
  }

  setTitle(title) {
    this.status_msg.text(title)
  }

  setErrorCount(error_count) {
    this.status_msg.empty()

    if (error_count === 0) {
      this.status_msg.text('Listo')
    }
    else {
      if (error_count >= 1) {
        let icon = '<span class="octicon octicon-alert"></span>'

        if (error_count === 1) {
          this.status_msg.html(`${icon} Se ha encontrado un error en tu programa.`)
        }
        else {
          this.status_msg.html(`${icon} Se han encontrado ${error_count} errores en tu programa.`)
        }
      }
    }
  }

}


export default class MessagePanel extends Emitter {
  constructor(container, editor_instance) {
    super([])

    this.container = container

    this.editor_instance = editor_instance

    this.setUp()
  }

  setUp() {
    this.status_bar = new StatusBar(this.container)

    this.message_list = $('<div id="message_list" class="flex-col msg_list-collapsed"></div>')

    this.container.append(this.message_list)
  }

  setErrorCount(error_count) {
    this.status_bar.setErrorCount(error_count)
  }

  setTitle(title) {
    this.status_bar.setTitle(title)
  }

  addMessage(category, data) {
    let template = 'reason' in data ? message_templates[category][data.reason]:message_templates[category].default

    let element = $('<div class="error-msg-container"></div>')

    element.on('click', (event) => {
      event.stopPropagation()
    })

    let title = null, description = null, suggestion = null

    let extra_info_container = $('<div id="extra_info" class="collapsable"></div>')

    extra_info_container.on('click', (event) => {
      event.stopPropagation()
    })

    if ('title' in template) {
      title = $(templateToHTML(template.title, data))

      let expand_button = $('<span class="octicon octicon-chevron-up"></span>')

      expand_button.attr('title', 'Expandir o contraer este panel')

      expand_button.on('click', (event) => {
        extra_info_container.toggleClass('expanded')
        expand_button.toggleClass('chevron-restored')
        event.stopPropagation()
      })

      title.attr('title', 'Mover cursor al error')

      title.append(expand_button)

      element.append(title)
    }

    if ('description' in template) {
      description = templateToHTML(template.description, data)
      extra_info_container.append($(description))
    }

    if ('suggestion' in template) {
      suggestion = templateToHTML(template.suggestion, data)
      extra_info_container.append($(suggestion))
    }

    element.append(extra_info_container)

    if ('line' in data && 'column' in data) {
      element.on('click', () => {
        this.editor_instance.focus()
        this.editor_instance.setCursor({line:data.line, ch:data.column})
      })
    }

    this.message_list.append(element)

    this.message_list.addClass('msg_list-expanded')
  }

  reset() {
    this.message_list.removeClass('msg_list-expanded')
    this.setTitle('Listo')
    this.message_list.empty()
  }
}
