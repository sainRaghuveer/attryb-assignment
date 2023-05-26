const mongoose = require('mongoose');

const marketplaceInventorySchema = new mongoose.Schema({
  dealer: { type: mongoose.Schema.Types.ObjectId, ref: 'Dealer', required: true },
  oemSpec: { type: mongoose.Schema.Types.ObjectId, ref: 'OemSpec', required: true },
  odometer: { type: Number },
  majorScratches: { type: String },
  originalPaint: { type: Boolean },
  accidentsReported: { type: Number },
  previousBuyers: { type: Number },
  registrationPlace: { type: String }
});

const MarketplaceInventoryModel = mongoose.model('MarketplaceInventory', marketplaceInventorySchema);

module.exports = {
    MarketplaceInventoryModel
};
