'use strict'

const Interpreter = require('interprete-pl').Interpreter
const Prompt = require("./Prompt")
const $ = require('jquery')
const jquery = $

class Window {
  constructor(container) {
    this.container = container
    this.interpreter = null
    this.setUp()
  }

  setUp() {
    this.container.append($('<div class="line"></div>'))
  }

  write(values_array) {
    let new_line = ($('<div class="line"></div>'))
    this.container.append(new_line)
    for (let value of values_array) {
      new_line.append($(`<span>${value}</span>`))
    }
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
    this.interpreter = new Interpreter(program, {event_logging:true})

    this.interpreter.on('write', (event, values) => {
      this.write(values)
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

module.exports = Window
