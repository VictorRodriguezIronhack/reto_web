const bcrypt = require('bcryptjs')
const Phone = require('../../models/phone.model')
const User = require('../../models/user.model')

// const phones = async phoneIds => {
//   try {
//     const phones = await Phone.find({ _id: { $in: phoneIds } })
//     return phones.map(phone => {
//       return { ...phone._doc, _id: phone.id }
//     })
//   } catch (err) { throw err }
// }

module.exports = {
  phones: async () => {
    try {
      const phones = await Phone.find()
      return phones.map(phone => {
        return { ...phone._doc, _id: phone.id}
      })
    } catch (err) { throw err }
  },
  createPhone: async args => {
    const newPhone = new Phone ({
      name: args.phoneInput.name,
      manufacturer: args.phoneInput.manufacturer,
      description: args.phoneInput.description,
      color: args.phoneInput.color,
      price: +args.phoneInput.price,
      imageFileName: args.phoneInput.imageFileName,
      screen: args.phoneInput.screen,
      processor: args.phoneInput.processor,
      ram: +args.phoneInput.ram
    })
    try {
      const result = await newPhone.save()
      return { ...result._doc, _id: result._doc._id.toString() }
    } catch (err) { throw err }
  },
  createUser: async args => {
    try {
      const user = await User.findOne({ email: args.userInput.email })
      if (user) {
        throw new Error('User exists already.')
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12)
        
      const newUser = new User({
        email: args.userInput.email,
        password: hashedPassword
      })

      const result = await newUser.save()
      return { ...result._doc, password: null, id: result.id }

    } catch (err) { throw err }
  }
}