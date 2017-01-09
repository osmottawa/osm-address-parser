# OSMify

> OpenStreetMap Street Address Parser

This NodeJS library helps convert street address strings into a standard OSM `addr:*` format.

## Quickstart

```javascript
import * as osmify from 'osmify'

osmify.parse('90 SPARKS ST')
/*
{
  'addr:housenumber': '90',
  'addr:street': 'Sparks Street'
}
*/
```

## References

- https://github.com/hassansin/parse-address
- https://github.com/DamonOehlman/addressit
- https://github.com/tjmehta/street-types
