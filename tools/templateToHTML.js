'use strict'

function parseTagObj(element, data) {
  let content = ''

  let attributes = ''

  for (let att_label in element) {
    if (att_label !== 'tag' && att_label !== 'content') {
      let attribute = `${att_label}="${parseTemplate(element[att_label], data)}"`
      attributes += attribute
    }
  }

  for (let template of element.content) {
    content += parseTemplate(template, data)
  }

  return `<${element.tag} ${attributes}>${content}</${element.tag}>`
}

function parseTemplate(template, data) {
  let pattern = /\${[^}]+}/

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

export default function templateToHTML(template, data) {
  let result = ''

  for (let element of template) {
    result += parseTemplate(element, data)
  }

  return result
}
