'use strict'

function parseTagObj(element, data) {
  let content = ''

  for (let template of element.content) {
    content += parseTemplate(template, data)
  }

  return `<${element.tag} class="${element.class}">${content}</${element.tag}>`
}

function parseTemplate(template, data) {
  let pattern = /{[^}]+}/

  if (typeof template === 'object') {
    return parseTagObj(template, data)
  }
  else {
    if (pattern.test(template) === true) {
      return (data[template.match(/\w+/g)[1]])
    }
    else {
      return template.toString()
    }
  }
}

function templateToHTML(template, data) {
  let result = ''

  for (let element of template) {
    result += parseTemplate(element, data)
  }

  return result
}

module.exports = templateToHTML
