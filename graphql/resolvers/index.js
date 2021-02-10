const authResolver = require('./auth')
const phonesResolver = require('./phones')
const purchaseResolver = require('./purchase')

const rootResolver = {
  ...authResolver,
  ...phonesResolver,
  ...purchaseResolver
}

module.exports = rootResolver