'use strict'

var names = require('./names.json')

module.exports = Object.assign(isPackage, { names })

function isPackage (basename) {
  return names.hasOwnProperty(basename)
}
