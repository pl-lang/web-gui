'use strict'

const path = require('path')
const fs = require('fs')

let file_path = path.resolve('web/app.html').replace('.web', 'web')

let string = fs.readFileSync(file_path, 'utf-8')

let target = '</body>'

let replacement = '<script src="./bundle.js" charset="utf-8"></script>'

let new_string = `${string.slice(0, string.search(target) + target.length)}\n  ${replacement}\n</html>`

let index_path = path.resolve('web/index.html')

fs.writeFileSync(index_path, new_string, 'utf-8')
