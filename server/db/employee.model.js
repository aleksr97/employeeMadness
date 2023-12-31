// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  created: {
    type: Date,
    default: Date.now,
  },
  present: {
    type: Boolean,
    default: false,
  },
  equipment: String,
  brand: {
		type: mongoose.Schema.Types.ObjectId, 
    ref: 'FavoriteBrands',
	},
});

module.exports = mongoose.model("Employee", EmployeeSchema);
