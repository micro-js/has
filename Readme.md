
# has

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Safe, functional hasOwnProperty

## Installation

    $ npm install @f/has

## Usage

```js
var has = require('@f/has')

var cache = {}

function isCached (id) {
  return has(id, cache)
}
```

## API

### has(prop, obj)

- `prop` - The property who's existence to check
- `obj` - The object on which to check the property

**Returns:** Boolean value indicating whether or not the property exists.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/has.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/has
[git-image]: https://img.shields.io/github/tag/micro-js/has.svg
[git-url]: https://github.com/micro-js/has
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/has.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/has
