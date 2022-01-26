const { Schema, model } = require('mongoose');

const phoneSchema = new Schema(
	{

		name: {
			type: String,
			required: true,
			trim: true,
			maxLength: [50, "El nombre no puede tener más de 50 caracteres"]
		},

		manufacturer: {
			type: String,
			required: true,
			trim: true
		},

		description: {
			type: String,
			required: true,
			trim: true,
			maxLength: [500, "La descripción no puede tener más de 500 caracteres"]
		},

		color: {
			type: String,
			required: true,
			trim: true
		},

		price: {
			type: Number,
			required: true,
		},

		imageFileName: {
			type: String,
			required: true,
			trim: true
		},

		screen: {
			type: String,
			required: true,
			trim: true
		},

		processor: {
			type: String,
			required: true,
			trim: true
		},

		ram: {
			type: Number,
			required: true,
			trim: true
		}
	},

	{ timestamps: true }

);

const Phone = model('Phone', phoneSchema);



module.exports = Phone;

