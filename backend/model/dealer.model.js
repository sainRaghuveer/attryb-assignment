const mongoose = require("mongoose");
const { Schema } = mongoose;

const dealerSchema = new Schema({
  name: String,
  location: String,
  contact: String,
  inventory: [{ type: Schema.Types.ObjectId, ref: 'MarketplaceInventory' }]
});

const Dealer = mongoose.model("dealer", dealerSchema);

module.exports = {
    Dealer
};
