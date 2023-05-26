const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: String // 'dealer' or 'user'
});

const User = mongoose.model("user", userSchema);

module.exports = {
    User
};
