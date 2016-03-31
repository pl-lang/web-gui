'use strict'

const CodeMirror = require('codemirror')

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {lineNumbers:true})

const $ = require('jquery')

const jquery = $

const Window = require('../components/Window')

const Compiler = require('interprete-pl').Compiler

let ejecutar = $('#ejecutar')

let compiler = new Compiler({event_logging:true})

let mensaje_de_estado = $('#status-msg')

compiler.on('type-error', (info, error) => {
  mensaje_de_estado.text('Se encontró un error de tipo al compilar tu programa. Debes corregir el error antes de continuar.')
  console.log(error)
})

compiler.on('lexical-error', (info, error) => {
  mensaje_de_estado.text('Se encontró un error léxico al compilar tu programa. Debes corregir el error antes de continuar.')
  console.log(error)
})

compiler.on('syntax-error', (info, error) => {
  mensaje_de_estado.text('Se encontró un error de sintaxis al compilar tu programa. Debes corregir el error antes de continuar.')
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
