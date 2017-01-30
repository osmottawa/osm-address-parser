const fs = require('fs')
const path = require('path')
const osmify = require('.')

const directories = {
  out: path.join(__dirname, 'fixtures', 'out'),
  in: path.join(__dirname, 'fixtures', 'in')
}

function save (directory, filename, features) {
  return fs.writeFileSync(path.join(directory, filename), JSON.stringify(features, null, 2))
}

function read (directory, filename) {
  return JSON.parse(fs.readFileSync(path.join(directory, filename), 'utf8'))
}

describe('osmify', () => {
  test('address', () => {
    const address = read(directories.in, 'address.json')
    const data = osmify(address)
    if (process.env.REGEN) { save(directories.out, 'address.json', data) }
    expect(data, read(directories.out, 'address.json'))
  })
})

