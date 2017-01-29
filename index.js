const fs = require('fs')

/**
 * Parse
 *
 * @param {Feature|FeatureCollection} json GeoJSON Feature or FeatureCollection
 * @returns {Feature|FeatureCollection}
 */
function parse (json) {
  return json
}

/**
 * Save
 *
 * @param {string} filename Input filename
 * @param {Object} json GeoJSON FeatureCollection or Feature
 * @returns {void}
 */
function save (filename, json) {
  fs.writeFileSync(filename, JSON.stringify(json, null, 2))
}

/**
 * Read
 *
 * @param {string} filename Input filename
 * @returns {void}
 */
function read (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

module.exports.save = save
module.exports.read = read
module.exports.parse = parse
