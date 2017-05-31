'use strict'

var test = require('tape')
var isPackage = require('./')

test(function (t) {
  t.ok(isPackage('package.json'))
  t.ok(isPackage('npm-shrinkwrap.json'))
  t.ok(isPackage('package-lock.json'))

  t.notOk(isPackage('package.dayman'))

  t.equal(typeof isPackage.names, 'object')

  t.end()
})
