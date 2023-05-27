const mongoose = require('mongoose');

const marketplaceInventorySchema = new mongoose.Schema({
  dealer:{type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true, immutable: true},
  oemSpec: { type: mongoose.Schema.Types.ObjectId, ref: 'OEMSpecs', immutable: true },
  odometer: { type: Number },
  majorScratches: { type: String },
  originalPaint: { type: Boolean },
  accidentsReported: { type: Number },
  previousBuyers: { type: Number },
  registrationPlace: { type: String },
  image:{type: String}
},{timestamps:true});

const MarketplaceInventoryModel = mongoose.model('MarketplaceInventory', marketplaceInventorySchema);

module.exports = {
    MarketplaceInventoryModel
};
