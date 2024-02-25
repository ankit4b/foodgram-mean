const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    isAdmin: { type: Boolean, default: false },
    password: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enterPassword) {
  return await bcrypt.compare(enterPassword, this.password);
};

userSchema.pre("save", async function (next) {
  //   if (!isModified) {
  //     next();
  //   }

  const salt = await bcrypt.genSalt(10);
  console.log("-> Before - this.password : ", this.password);
  this.password = await bcrypt.hash(this.password, salt);
  console.log("-> After - this.password : ", this.password);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
