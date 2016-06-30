'use strict'

import CodeMirror from 'codemirror'
import $ from 'jquery'
import Window from '../components/Window.js'
import MessagePanel from '../components/MessagePanel.js'
import { Parser, StaticChecker, DeclarationTransform, InterpretableTransform } from 'interprete-pl'

const ejecutar = $('#ejecutar')

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {lineNumbers:true, firstLineNumber:0})

const panel_de_mensajes = new MessagePanel($('#message_panel'), editor)

let error_count = 0

let type_error_found = false

// Crear parser y asignar funciones a sus eventos
let parser = new Parser();

parser.on('lexical-error', (...args) => {
  console.log(args)
})

parser.on('syntax-error', (...args) => {
  console.log(args)
})
// ----------------------------------------------

// Crear StaticChecker y asignar funciones a sus eventos
let checker = new StaticChecker()

checker.on('type-check-started', () => {console.log('chequeo estatico iniciado')})

checker.on('type-check-finished', () => {console.log('chequeo estatico finalizado')})

checker.on('type-error', (...args) => {
  type_error_found = true
})

ejecutar.on('click', () => {
  ejecutar.prop('disabled', true)

  error_count = 0
  type_error_found = false

  panel_de_mensajes.reset()

  let window_container = $('#window')

  window_container.empty()

  let window = new Window($('#window'))

  let parser_report = parser.parse(editor.getValue())

  console.log(parser_report.result)

  if (parser_report.error == false) {
    checker.check(parser_report.result)

    if (type_error_found) {
      console.log('el programa no va a ejecutarse porque contiene errores de tipado')
    }
    else {
      console.log('no hubo errores, se ejecutara el programa')
      console.log('transformando el programa para que pueda ejecutarse')
      let transformed_ast = InterpretableTransform(DeclarationTransform(parser_report.result))
      console.log(transformed_ast)
      window.run(transformed_ast)
    }
  }

  ejecutar.prop('disabled', false)
})
