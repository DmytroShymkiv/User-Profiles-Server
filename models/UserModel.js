const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  profiles: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
});

module.exports = model("User", UserSchema);
