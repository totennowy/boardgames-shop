const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const products = await Product.find({})
      .skip(Number(offset))
      .limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPromotionalProducts = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const products = await Product.find({ discount: { $gt: 0 } })
      .sort({ discount: -1})
      .skip(Number(offset))
      .limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNewReleases = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const now = new Date();
    const products = await Product.find({
      releaseDate: {
        $gte: oneYearAgo,
        $lte: now
      }
    })
    .skip(Number(offset))
    .limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBestsellers = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const products = await Product.find({ sold: {$gt: 999}})
      .sort({ sold: -1 })
      .skip(Number(offset))
      .limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUpcomingReleases = async (req, res) => {
  try {
    const { limit = 10, offset = 0 } = req.query;
    const now = new Date();
    const products = await Product.find({
      releaseDate: {
        $gt: now
      }
    })
    .sort({releaseDate: 1})
    .skip(Number(offset))
    .limit(Number(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
