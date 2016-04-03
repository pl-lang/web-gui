'use strict'

function findClosingBracket(string, opening_bracket_index) {
  let i = opening_bracket_index + 1
  for (; i < string.length; i++) {
    if (string[i] == '{') {
      i = findClosingBracket(string, i)
    }
    else if (string[i] == '}') {
      return i
    }
  }
}

function interpretTemplate(expression, data) {
  let functionName = expression.match(/\w+/g)[0]

  switch (functionName) {
    case 'var':
      return (data[expression.match(/\w+/g)[1]])

    case 'string': {
      let from_str = expression.slice(expression.indexOf('from'))
      let opening_bracket = from_str.indexOf('{')
      let template_string = from_str.slice(opening_bracket, findClosingBracket(from_str, opening_bracket))
      let string = interpretTemplate(template_string, data).toString()
      return string
    }

    case 'sliteral': {
      let string = expression.match(/'([^']*)'/)[1]
      return string
    }

    case 'span': {
      let classes = ''

      if (expression.includes('class')) {
        let class_str = expression.slice(expression.indexOf('class'))
        let opening_bracket = class_str.indexOf('{')
        let class_expression = class_str.slice(opening_bracket, findClosingBracket(class_str, opening_bracket))
        classes = interpretTemplate(class_expression, data)
      }

      let text = ''

      if (expression.includes('text')) {
        let text_str = expression.slice(expression.indexOf('text'))
        let opening_bracket = text_str.indexOf('{')
        let text_expression = text_str.slice(opening_bracket, findClosingBracket(text_str, opening_bracket))
        text = interpretTemplate(text_expression, data)
      }

      return `<span class="${classes}">${text}</span>`
    }

    case 'ulist': {
      let from_str = expression.slice(expression.indexOf('from'))
      let opening_bracket = from_str.indexOf('{')
      let template_string = from_str.slice(opening_bracket, findClosingBracket(from_str, opening_bracket))
      let items = interpretTemplate(template_string, data)

      let item_str = expression.slice(expression.indexOf('item'))
      let item_opening_bracket = item_str.indexOf('{')
      let item_template = item_str.slice(item_opening_bracket, findClosingBracket(item_str, item_opening_bracket))

      let items_string = ''
      for (let element in items) {
        let content = interpretTemplate(item_template, {element})
        let markup = `\n<li>${content}</li>\n`
        items_string += markup
      }

      return `\n<ul>${items_string}</ul>\n`
    }

    default:
      return `Error: ${functionName} is not a valid template function!`
  }
}

function parse(template, data) {
  let pattern = /{[^}]+}/

  let final_string = template

  while (pattern.test(final_string)) {
    let opening_bracket = final_string.indexOf('{')
    let closing_bracket = findClosingBracket(final_string, opening_bracket)
    let left_half = final_string.slice(0, opening_bracket)
    let right_half = final_string.slice(closing_bracket + 1)
    let expression = final_string.slice(opening_bracket, closing_bracket + 1)
    let replacement = interpretTemplate(expression, data)

    final_string = left_half + replacement + right_half
  }

  return final_string
}

module.exports = parse
