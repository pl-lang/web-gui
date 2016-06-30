'use strict'

import CodeMirror from 'codemirror'
import $ from 'jquery'
import Window from '../components/Window.js'
import MessagePanel from '../components/MessagePanel.js'
import { Parser } from 'interprete-pl'

const ejecutar = $('#ejecutar')

const editor = CodeMirror.fromTextArea(document.getElementById('editor'), {lineNumbers:true, firstLineNumber:0})

const panel_de_mensajes = new MessagePanel($('#message_panel'), editor)

let error_count = 0

let parser = new Parser();

parser.on('lexical-error', (...args) => {
  console.log(args)
})

parser.on('syntax-error', (...args) => {
  console.log(args)
})

ejecutar.on('click', () => {
  ejecutar.prop('disabled', true)

  error_count = 0

  panel_de_mensajes.reset()

  let window_container = $('#window')

  window_container.empty()

  let window = new Window($('#window'))

  let report = parser.parse(editor.getValue())

  console.log(report.result)

  ejecutar.prop('disabled', false)
})
