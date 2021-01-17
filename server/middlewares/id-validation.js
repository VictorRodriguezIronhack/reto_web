const mongoose = require('mongoose')

module.exports = {
    checkId: (req, res, next) => mongoose.Types.ObjectId.isValid(req.params.id) ? next() : res.status(404).json({ code: 404, message: 'Invalid ID' })
}
