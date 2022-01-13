const Phone = require('../../models/phone.model')
const Purchase = require('../../models/purchase.model')

const { transformPurchase, transformPhone } = require('./merge')


module.exports = {
  purchases: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!')
    }
    try {
      const purchases = await Purchase.find()
      return purchases.map(purchase => {
        return transformPurchase(purchase)
      })
    } catch (err) { throw err }
  },
  purchasePhone: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!')
    }
    const fetchedPhone = await Phone.findOne({_id: args.phoneID})
    const purchase = new Purchase({
      phone: fetchedPhone,
      user: req.userId
    })
    
    const result = await purchase.save()
    return transformPurchase(result)
  },
  returnPhone: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!')
    }
    try {
      const purchase = await Purchase.findById(args.purchaseID).populate('phone')
      const phone = transformPhone(purchase.phone)
      await Purchase.deleteOne({ _id: args.purchaseID })
      return phone

    } catch (err) { throw err }
  }
}