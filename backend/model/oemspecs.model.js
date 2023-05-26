const mongoose = require('mongoose');
const { Schema } = mongoose;

const oemSpecsSchema = new Schema({
  model: String,
  year: Number,
  listPrice: Number,
  colors: [String],
  mileage: Number,
  power: Number,
  maxSpeed: Number
});

const OEMSpecs = mongoose.model("oemspecs", oemSpecsSchema);

module.exports = {
    OEMSpecs
};
