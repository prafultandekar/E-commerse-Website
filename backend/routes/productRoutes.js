

const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");

const { auth, adminOnly } = require("../middleware/authMiddleware");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/", auth, adminOnly, addProduct);
router.put("/:id", auth, adminOnly, updateProduct);
router.delete("/:id", auth, adminOnly, deleteProduct);

module.exports = router;
