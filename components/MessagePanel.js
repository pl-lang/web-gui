'use strict'

const templateToHTML = require('../tools/templateToHTML')

const message_templates = require('../resources/strings.json')

const Emitter = require('emitter')
const $ = require('jquery')

class StatusBar {
  constructor(container) {
    this.container = container

    this.element = this.container.append($(
      `<div id="status_bar" class="bar bar-top-border bar-bottom-border flex-row center-align"><span id="status_msg" class="title small-title"></span></div>`
    ))

    this.status_msg = this.element.find('#status_msg')

    this.setTitle('Listo.')
  }

  setTitle(title) {
    this.status_msg.text(title)
  }

  setErrorCount(error_count) {
    this.status_msg.empty()

    if (error_count === 0) {
      this.status_msg.text('Listo.')
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


class MessagePanel extends Emitter {
  constructor(container, editor_instance) {
    super([])

    this.container = container

    this.editor_instance = editor_instance

    this.setUp()
  }

  setUp() {
    this.status_bar = new StatusBar(this.container)

    this.message_list = $('<div id="message_list" class="flex-col"></div>')

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

    let title = null, description = null, suggestion = null

    let extra_info_container = $('<div id="extra_info" class="collapsable"></div>')

    if ('title' in template) {
      title = $(templateToHTML(template.title, data))

      let expand_button = $('<span class="octicon octicon-chevron-up"></span>')

      expand_button.on('click', () => {
        extra_info_container.toggleClass('expanded')
        expand_button.toggleClass('chevron-restored')
      })

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

    if ('atLine' in data && 'atColumn' in data) {
      element.on('click', () => {
        this.editor_instance.focus()
        this.editor_instance.setCursor({line:data.atLine, ch:data.atColumn})
      })
    }

    this.message_list.append(element)
  }
}

module.exports = MessagePanel
