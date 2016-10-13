const lab = exports.lab = require('lab').script()
const Code = require('code')
const expect = Code.expect

const knex = require('knex')({})
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin(require('../index'))

lab.experiment('bookshelf-proxy-model', () => {

  lab.test('can new up model', done => {
    const model = new bookshelf.Model()
    expect(model).to.be.instanceof(bookshelf.Model)
    done()
  })

  lab.test('can get attribute using dot notation', done => {
    const model = new bookshelf.Model({ foo: 'bar' })
    expect(model.foo).to.equal('bar')
    done()
  })

  lab.test('can set attribute using dot notation', done => {
    const model = new bookshelf.Model()
    model.foo = 'bar'
    expect(model.get('foo')).to.equal('bar')
    done()
  })

  lab.test('works with a subclassed model', done => {
    const MyModel = bookshelf.Model.extend({})
    const model = new MyModel({ foo: 'bar' })
    model.buz = 'baz'
    expect(model).to.be.instanceof(bookshelf.Model)
    expect(model).to.be.instanceof(MyModel)
    expect(model.foo).to.equal('bar')
    expect(model.get('buz')).to.equal('baz')
    done()
  })

})
