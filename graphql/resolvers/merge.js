const Phone = require('../../models/phone.model')
const User = require('../../models/user.model')

const { dateToString } = require('../../utils/date')

const user = async userId => {
  try {
    const user = await User.findById(userId)
    return {
      ...user._doc,
      _id: user.id,
      createdPhones: phones.bind(this, user._doc.createdPhones)
    }
  } catch (err) { throw err }
}

const phones = async phoneIds => {
  try {
    const phones = await Phone.find({ _id: { $in: phoneIds } })
    return phones.map(phone => {
      return transformPhone(phone)
    })
  } catch (err) { throw err }
}

const transformPhone = phone => {
  return {
    ...phone._doc,
    _id: phone.id,
    date: dateToString(phone._doc.date),
    creator: user.bind(this, phone.creator)
  }
}

const singlePhone = async phoneId => {
  try {
    const phone = await Phone.findById(phoneId)
    return transformPhone(phone)

  } catch (err) { throw err }
}

const transformPurchase = purchase => {
  return {
    ...purchase._doc,
    _id: purchase.id,
    user: user.bind(this, purchase._doc.user),
    phone: singlePhone.bind(this, purchase._doc.phone),
    createdAt: dateToString(purchase._doc.createdAt),
    updatedAt: dateToString(purchase._doc.updatedAt)
  } 
}

exports.user = user
exports.phones = phones
exports.transformPhone = transformPhone
exports.singlePhone = singlePhone
exports.transformPurchase = transformPurchase