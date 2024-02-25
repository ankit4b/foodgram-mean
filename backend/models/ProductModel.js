const mongoose = require("mongoose");

const productModel = mongoose.Schema(
  {
    name: { type: String, require: true },
    cookTime: { type: String, require: true },
    price: { type: Number, require: true },
    origins: { type: String },
    stars: { type: Number, require: true },
    imageUrl: {
      type: String,
      require: true,
      default:
        "https://res.cloudinary.com/dsqteibj6/image/upload/v1704992326/fibnurx9ykhfmcrh4rsp.jpg",
    },
    tags: { type: String, require: true },
    inStock: { type: Boolean, require: true },
    admin_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productModel);

module.exports = Product;
