# OSMify

## ⚠️This project is NOT actively being developped

<!-- Line Break -->
[![Standard - JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

> OpenStreetMap street address parser
>
> `OSMify` helps convert street address strings into a standard OSM `addr:*` format.

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
