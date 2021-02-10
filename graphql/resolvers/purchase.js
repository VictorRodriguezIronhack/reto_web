const Phone = require('../../models/phone.model')
const Purchase = require('../../models/purchase.model')

const { transformPurchase } = require('./merge')


module.exports = {
  purchases: async () => {
    try {
      const purchases = await Purchase.find()
      return purchases.map(purchase => {
        return transformPurchase(purchase)
      })
    } catch (err) { throw err }
  },
  purchasePhone: async args => {
    const fetchedPhone = await Phone.findOne({_id: args.phoneID})
    const purchase = new Purchase({
      phone: fetchedPhone,
      user: 'naskdnasñdmasd'
    })
    
    const result = await purchase.save()
    return transformPurchase(result)
  },
  returnPhone: async args => {
    try {
      const purchase = await Purchase.findById(args.purchaseID).populate('phone')
      const phone = transformPhone(purchase.phone)
      await Purchase.deleteOne({ _id: args.purchaseID })
      return phone

    } catch (err) { throw err }
  }
}