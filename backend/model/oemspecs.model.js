const mongoose = require('mongoose');
const { Schema } = mongoose;

const oemSpecsSchema = new mongoose.Schema({
  model: String,
  year: Number,
  listPrice: Number,
  colors: [String],
  mileage: Number,
  power: Number,
  maxSpeed: Number
});

const OEMSpecsModel = mongoose.model("OEMSpecs", oemSpecsSchema);

module.exports = {
    OEMSpecsModel
};
