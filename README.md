# bookshelf-proxy-model

Eliminates the need to use `.get()` and `.set()` on Bookshelf models.

## Installation

```javascript
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin(require('bookshelf-proxy-model'))
```

## Usage

Once the plugin has been setup, you'll be able to get and set model attributes
using dot notation.

```javascript
const hero = Person.forge({})

// Now do this:
hero.firstName = 'Luke'
hero.lastName = 'Skywalker'

// And this:
let firstName = hero.firstName

// instead of this:
hero.set('firstName', 'Luke')
firstName = hero.get('firstName')
```
