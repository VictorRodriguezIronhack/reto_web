const Phone = require('../../models/phone.model')
const User = require('../../models/user.model')

const { transformPhone } = require('./merge')


module.exports = {
  phones: async () => {
    try {
      const phones = await Phone.find()
      return phones.map(phone => {
        return transformPhone(phone)
      })
    } catch (err) { throw err }
  },
  createPhone: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('Unauthenticated!')
    }
    const newPhone = new Phone({
      name: args.phoneInput.name,
      manufacturer: args.phoneInput.manufacturer,
      description: args.phoneInput.description,
      color: args.phoneInput.color,
      price: +args.phoneInput.price,
      imageFileName: args.phoneInput.imageFileName,
      screen: args.phoneInput.screen,
      processor: args.phoneInput.processor,
      ram: +args.phoneInput.ram,
      date: new Date(args.phoneInput.date),
      creator: '5c0fbd06c816781c518e4f3e'
    })
    let createdPhone
    try {
      const result = await newPhone.save()
      createdPhone = transformPhone(result)
      const creator = await User.findById('5c0fbd06c816781c518e4f3e')

      if (!creator) {
        throw new Error('User not found.');
      }
      creator.createdPhones.push(newPhone)
      await creator.save()

      return createdPhone

    } catch (err) {
      console.log(err)
      throw err
    }
  }
}