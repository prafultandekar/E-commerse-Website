

const Product = require("../models/productModel");

// Add product (Admin only)
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const { category, sortBy } = req.query;
    let query = {};
    if (category) query.category = category;

    let products = await Product.find(query);
    if (sortBy === "price") {
      products = products.sort((a, b) => a.price - b.price);
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get single product
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Delete product (Admin)
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: "Product deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update product (Admin)
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
