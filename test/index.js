/**
 * Imports
 */

var has = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var o = {a: 1}

  t.ok(has('a', o))
  t.ok(!has('b', 0))
  t.end()
})
