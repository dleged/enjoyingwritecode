var fs = require('fs')
var annotation = require('./')

var css = fs.readFileSync('sample.css', 'utf-8').trim()

annotation.parse(css)
