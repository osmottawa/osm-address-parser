const writer = require('geojson-writer').writer
const address = require('../fixtures/in/ottawa-address.json')
const featureCollection = require('@turf/helpers').featureCollection

const collection = featureCollection([])
const unique = {}

for (const feature of address.features) {
  delete feature.properties.UNITID
  delete feature.properties.FULLADDR
  delete feature.properties.POINT_X
  delete feature.properties.POINT_Y
  if (feature.properties.ADDRTYPE === 'MAIN' && !unique[feature.properties.FULLNAME]) {
    delete feature.properties.ADDRTYPE
    unique[feature.properties.FULLNAME] = true
    collection.features.push(feature)
  }
}
console.log(collection.features.length)
writer('./fixtures/in/ottawa-address-clean.json', collection)