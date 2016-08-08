'use strict'

import { Interpreter } from 'interprete-pl'
import Prompt from "./Prompt"
import $ from 'jquery'

export default class Window {
  constructor(container) {
    this.container = container
    this.interpreter = null
    this.setUp()
  }

  setUp() {
    this.container.append($('<div class="line"></div>'))
  }

  write(value) {
    let new_line = ($(`<div class="line"><span>${value}</span></div>`))
    this.container.append(new_line)
  }

  read(varlist) {
    let prompt = new Prompt(this.container, varlist.length)
    let interpreter = this.interpreter
    prompt.on('submit-data', function (data) {
      this.close()
      interpreter.sendReadData(varlist, data)
      interpreter.run()
    })
  }

  run(program) {
    this.interpreter = new Interpreter(program.modules, {event_logging:true})

    this.interpreter.on('write', (event, value) => {
      this.write(value)
    })

    this.interpreter.on('read', (event, varlist) => {
      this.read(varlist)
    })

    this.interpreter.on('program-finished', () => {
      this.container.append($('<br>'))
      this.container.append($('<div class="line"><span>Programa finalizado</span></div>'))
      console.log('programa finalizado')
    })

    this.interpreter.run()
  }
}
