module.exports = function (bookshelf, params) {

  const handler = {

    get(target, key) {
      if (typeof target[key] !== 'undefined') {
        return target[key]
      }
      if (target.has(key)) {
        return target.get(key)
      }
    },

    set(target, key, value) {
      if (key == 'attributes' ||
          key == 'relations' ||
          key == 'cid' ||
          key == '_previousAttributes' ||
          key == 'changed' ||
          typeof target[key] !== 'undefined') {
        return target[key] = value
      }
      return target.set(key, value)
    }

  }

  bookshelf.Model.prototype = new Proxy(bookshelf.Model.prototype, handler)

}
