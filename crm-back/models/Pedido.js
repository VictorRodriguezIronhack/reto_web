const mongoose = require('mongoose');

const pedidoSchema = mongoose.Schema({
   producto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Producto'
    },
    quantity: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Usuario'
    },
    
});

module.exports = mongoose.model('Pedido', pedidoSchema);