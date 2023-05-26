const mongoose = require('mongoose');

const dealerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true },
  inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MarketplaceInventory' }]
});

const DealerModel = mongoose.model('Dealer', dealerSchema);

module.exports = {
    DealerModel
};
