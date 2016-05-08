/**
 * Expose has
 */

module.exports = has

/**
 * Vars
 */

var hasOwn = Object.prototype.hasOwnProperty

/**
 * has
 */

function has (prop, obj) {
  return hasOwn.call(obj, prop)
}
