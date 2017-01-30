# OSMify

[![Build Status](https://travis-ci.org/osmottawa/osmify.svg?branch=master)](https://travis-ci.org/osmottawa/osmify)
[![Coverage Status](https://coveralls.io/repos/github/osmottawa/osmify/badge.svg?branch=master)](https://coveralls.io/github/osmottawa/osmify?branch=master)
[![npm version](https://badge.fury.io/js/global-mercator.svg)](https://badge.fury.io/js/global-mercator)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/osmottawa/osmify/master/LICENSE)

<!-- Line Break -->
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

> OpenStreetMap street address parser
>
> `OSMify` helps convert street address strings into a standard OSM `addr:*` format.

## Install

**npm**

```bash
$ npm install --save osmify
```

**web browser ([ES5](http://kangax.github.io/compat-table/es5/)**

```html
<script src="https://unpkg.com/osmify/osmify.min.js"></script>
```

## Usage

```javascript
osmify('90 SPARKS ST')
/*
{
  'addr:housenumber': '90',
  'addr:street': 'Sparks Street'
}
*/
```

## API

## References

- https://github.com/slevithan/xregexp
- https://github.com/hassansin/parse-address
- https://github.com/DamonOehlman/addressit
- https://github.com/tjmehta/street-types
- [Ottawa building permits](http://data.ottawa.ca/en/dataset/construction-demolition-pool-enclosure-permits-monthly)
