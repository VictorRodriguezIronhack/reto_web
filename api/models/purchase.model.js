const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    products: Array,
    total: {
        type: Number
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (doc, ret) => {
                ret.id = doc._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        },
    }
)

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;