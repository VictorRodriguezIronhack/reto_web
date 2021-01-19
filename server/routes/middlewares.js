const mongoose = require('mongoose')

module.exports = {
    checkId: (req, res, next) => !mongoose.Types.ObjectId.isValid(req.params.book_id) ? res.status(404).send({ message: 'ID inválido' }) : next()
}