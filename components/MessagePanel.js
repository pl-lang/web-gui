'use strict'

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
  constructor(container) {
    super([])

    this.container = container

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
}

module.exports = MessagePanel
