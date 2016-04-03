'use strict'

const CodeMirror = require('codemirror')

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {lineNumbers:true})

const $ = require('jquery')

const jquery = $

const Window = require('../components/Window')

const MessagePanel = require('../components/MessagePanel')

const Compiler = require('interprete-pl').Compiler

let ejecutar = $('#ejecutar')

let compiler = new Compiler({event_logging:true})

let panel_de_mensajes = new MessagePanel($('#message_panel'), editor)

compiler.on('type-error', (info, error) => {
  panel_de_mensajes.setErrorCount(1)
  console.log(error)
})

compiler.on('lexical-error', (ev_name, info) => {
  panel_de_mensajes.setErrorCount(1)
  panel_de_mensajes.addMessage('lexical-error', info)
  console.log(info)
})

compiler.on('syntax-error', (info, error) => {
  panel_de_mensajes.setErrorCount(1)
  console.log(error)
})

ejecutar.on('click', () => {
  ejecutar.prop('disabled', true)

  let window_container = $('#window')

  window_container.empty()

  let window = new Window($('#window'))

  let report = compiler.compile(editor.getValue(), true)

  if (!report.error) {
    window.run(report.result)
    mensaje_de_estado.text('Listo')
  }
  else {
    console.log(report.result)
  }

  ejecutar.prop('disabled', false)
})
