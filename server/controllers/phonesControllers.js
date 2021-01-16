const User = require('../models/user.model')
const PhonesData = require('../../phones.json')

exports.getAll = (req, res) => {
    res.json(
        PhonesData.map(phone => {
            const { id, name, manufacturer, imageFileName, price } = phone
            return { id, name, manufacturer, imageFileName, price }
        })
    )
}

exports.getOne = (req, res) => {
    const phone = PhonesData.find(elm => elm.id === parseInt(req.params.phone_id))
    res.json(phone)
}

exports.addPhone = async (req, res) => {

    if (req.isAuthenticated()) {

        const phone = PhonesData.find(elm => elm.id === parseInt(req.params.phone_id))

        try {
            const user = await User.findByIdAndUpdate(req.params.user_id, { $push: { wishlist: phone } }, { new: true })
            res.json(user)

        } catch (error) {
            console.log(error)
        }
    }

    res.status(403).json({ message: 'Unauthorized' })
}

exports.removePhone = async (req, res) => {
    
    if (req.isAuthenticated()) {

        const phone = PhonesData.find(elm => elm.id === parseInt(req.params.phone_id))

        try {
            const user = await User.findByIdAndUpdate(req.params.user_id, { $pull: { wishlist: phone } }, { new: true })
            res.json(user)

        } catch (error) {
            console.log(error)
        }
    }

    res.status(403).json({ message: 'Unauthorized' })
}