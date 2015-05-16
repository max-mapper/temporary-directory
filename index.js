var osTmpdir = require('os-tmpdir')
var path = require('path')
var cuid = require('cuid')
var mkdirp = require('mkdirp')
var rimraf = require('rimraf')

module.exports = function tmpdir (title, cb) {
  if (typeof title === 'function') {
    cb = title
    title = 'tmp'
  }

  var tmp = path.join(osTmpdir(), title + '-' + cuid())
  mkdirp(tmp, function (err) {
    if (err) return cb(err)
    cb(null, tmp, cleanup)

    function cleanup (cb) {
      rimraf(tmp, function (err) {
        if (!cb) return
        cb(err)
      })
    }
  })
}
