const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ankush:pass@clustercohort.nu7bjxo.mongodb.net/"
);
// Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
