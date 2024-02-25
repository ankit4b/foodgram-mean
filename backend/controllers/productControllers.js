const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");

//@desc Add product
//@route POST /api/product
//@access private
const addProduct = asyncHandler(async (req, res) => {
  console.log("Inside addProduct");
  console.log("req.user : ", req.user);

  const { name, cookTime, price, origins, stars, imageUrl, tags } = req.body;

  const product = await Product.create({
    name,
    cookTime,
    price,
    origins,
    stars,
    imageUrl,
    tags,
    admin_id: req.user.id,
  });

  console.log("Product : ", product);

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Product not able to save in db");
  }
});

//@desc Get product
//@route GET /api/product/:id
//@access public
const getProduct = asyncHandler(async (req, res) => {
  console.log("req.params : ", req.params);
  const product = await Product.findById(req.params.id);
  console.log("product : ", product);
  if (!product) {
    res.status(404);
    throw new Error("product not Found");
  }
  res.status(200).json(product);
});

//@desc Get product
//@route GET /api/product/:id
//@access public
const getProductByUser = asyncHandler(async (req, res) => {
  const products = await Product.find({ admin_id: req.user.id });
  console.log("products : ", products);

  res.status(200).json(products);
});

//@desc Update product
//@route PUT /api/product/:id
//@access private
const updateProduct = asyncHandler(async (req, res) => {
  console.log("Inside addProduct");

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.admin_id.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User don't have permission to update this product");
  }

  const updatedProdcut = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedProdcut);
});

//@desc Delete product
//@route POST /api/product/:id
//@access private
const deleteProduct = asyncHandler(async (req, res) => {
  console.log("Inside deleteProduct");

  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  if (product.admin_id.toString() !== req.user.id) {
    res.status(404);
    throw new Error("User don't have permission to update this product");
  }

  await product.deleteOne();

  res.status(200).json(product);
});

module.exports = {
  addProduct,
  getProduct,
  getProductByUser,
  updateProduct,
  deleteProduct,
};
