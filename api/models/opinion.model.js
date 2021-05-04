const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opinionSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Title is required',
            minlength: [5, 'You need at least 5 characters'],
        },
        rate: {
            type: Number,
            required: 'Rate is required',
            enum: [1, 2, 3, 4, 5],
        },
        text: {
            type: String,
            required: 'Text is required'
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        phone: {
            type: Schema.Types.ObjectId,
            ref: 'Phone'
        },
    }, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }
    }
}
);

const Opinion = mongoose.model('Opinion', opinionSchema);

module.exports = Opinion;