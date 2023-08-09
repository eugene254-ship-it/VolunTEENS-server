const mongoose = require("mongoose");
const UsersSchema = new mongoose.Schema(
  {
    // * to figure out continuing integer in mongoDB */
    account_id: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user_type: { type: String, enum: ["donor", "worker", "volunteer"] },
  },
  { collection: "users", timestamps: true }
);

const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
