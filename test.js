const osmify = require('.')
const path = require('path')
const read = require('.').read
const save = require('.').save

const directories = {
  out: path.join(__dirname, 'test', 'fixtures', 'out'),
  in: path.join(__dirname, 'test', 'fixtures', 'in')
}

const fixtures = {
  address: {
    in: path.join(directories.in, 'address.json'),
    out: path.join(directories.out, 'address.json')
  }
}

describe('parse', () => {
  test('address', () => {
    const address = read(fixtures.address.in)
    const data = osmify.parse(address)
    if (process.env.REGEN) { save(fixtures.address.out, data) }
    expect(data, read(fixtures.address.out))
  })
})

