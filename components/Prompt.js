'use strict'

import EventEmitter from 'events'

import $ from 'jquery'

export default class Prompt extends EventEmitter {
  constructor(container, total) {
    super()
    this._data_read = []
    this._total = total
    this._container = container
    this._textarea = $('<textarea id="prompt"></textarea>')

    this._textarea.keypress((key) => {
      if (key.which == 13) {
        key.preventDefault()
        this._data_read.push(this._textarea[0].value)
        if (this._data_read.length == this._total) {
          this.emit('submit-data', this._data_read)
        }
        else {
          this.moveTextArea()
        }
      }
    })

    this._container.append(this._textarea)
    this._textarea.focus()
  }

  close() {
    let value = this._textarea[0].value
    let new_line = $(`<div class="line"><span>&gt; ${value}</span></div>`)
    this._textarea.replaceWith(new_line)
  }

  moveTextArea() {
    let value = this._textarea[0].value
    let new_line = $(`<div class="line"><span>&gt; ${value}</span></div>`)
    new_line.insertBefore(this._textarea)
    this._textarea[0].value = ''
    this._textarea.focus()
  }
}
