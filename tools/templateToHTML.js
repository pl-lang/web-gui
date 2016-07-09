'use strict'

function parseTagObj(element, data) {
  let content = ''

  let attributes = ''

  for (let att_label in element) {
    if (att_label !== 'tag' && att_label !== 'content' && att_label !== 'prop' && att_label !== 'template') {
      let attribute = `${att_label}="${parseTemplate(element[att_label], data)}"`
      attributes += attribute
    }
  }

  if (element.tag === 'ul') {
    for (let item of data[element.prop]) {
      content += parseTagObj(element.template, {item})
    }
  }
  else {
    for (let template of element.content) {
      content += parseTemplate(template, data)
    }
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
