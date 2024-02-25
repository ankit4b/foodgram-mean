const express = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByUser,
} = require("../controllers/productControllers");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/productByUser").get(protect, getProductByUser);
router.route("/").post(protect, addProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(protect, updateProduct)
  .delete(protect, deleteProduct);

module.exports = router;
