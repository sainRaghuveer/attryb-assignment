const mongoose = require("mongoose");
const { Schema } = mongoose;

const marketplaceInventorySchema = new Schema({
  model: String,
  year: Number,
  kmOnOdometer: Number,
  majorScratches: Boolean,
  originalPaint: Boolean,
  accidentsReported: Number,
  previousBuyers: Number,
  registrationPlace: String
});

const MarketplaceInventory = mongoose.model('marketplaceInventory', marketplaceInventorySchema);

module.exports = {
    MarketplaceInventory
};
