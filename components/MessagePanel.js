'use strict'

const templateParser = require('../tools/templateParser')

const message_templates = require('../resources/strings.json')

const Emitter = require('emitter')
const $ = require('jquery')

class StatusBar {
  constructor(container) {
    this.container = container

    this.element = this.container.append($(
      `<div id="status_bar" class="bar bar-top-border flex-row center-align"><span id="status_msg" class="title small-title"></span></div>`
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

    this.message_list = this.container.append($(
      '<div id="message_list"></div>'
    ))
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

    if ('title' in template) {
      title = templateParser(template.title, data)
      element.append($(title))
    }

    if ('description' in template) {
      description = templateParser(template.description, data)
      element.append($(description))
    }

    if ('suggestion' in template) {
      suggestion = templateParser(template.suggestion, data)
      element.append($(suggestion))
    }

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
