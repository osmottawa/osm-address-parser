const path = require('path')
const featureCollection = require('@turf/helpers').featureCollection
const read = require('../').read
const save = require('../').save

const address = read(path.join(__dirname, 'fixtures', 'in', 'address.json'))
const collection = featureCollection([])
const unique = {}

for (const feature of address.features) {
  feature.properties = {
    ADDRNUM: feature.properties.FULLNAME,
    FULLNAME: feature.properties.FULLNAME,
    QUALIFIER: feature.properties.QUALIFIER
  }
  if (!unique[feature.properties.FULLNAME]) {
    unique[feature.properties.FULLNAME] = true
    collection.features.push(feature)
  }
}
console.log(collection.features.length)
save(path.join(__dirname, 'fixtures', 'in', 'address-clean.json'), collection)
