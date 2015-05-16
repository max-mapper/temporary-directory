var fs = require('fs')
var test = require('tape')
var tmp = require('./index.js')

test('creates and cleans up tmpdir', function (t) {
  tmp(function (err, tmpdir, cleanup) {
    t.notOk(err, 'no error')
    t.ok(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      t.notOk(err, 'no error')
      t.notOk(fs.existsSync(tmpdir), 'tmpdir got removed')
      t.end()
    })
  })
})

test('creates and cleans up tmpdir w/ custom prefix', function (t) {
  tmp('cats', function (err, tmpdir, cleanup) {
    t.notOk(err, 'no error')
    t.ok(tmpdir.indexOf('cats-') > -1, 'has cats-')
    t.ok(fs.existsSync(tmpdir), 'tmpdir exists')
    cleanup(function (err) {
      t.notOk(err, 'no error')
      t.notOk(fs.existsSync(tmpdir), 'tmpdir got removed')
      t.end()
    })
  })
})
