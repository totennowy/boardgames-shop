const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  teaser: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  illustrations: {
    type: [String],
    required: true,
  },
  themes: {
    type: [String],
    required: true,
  },
  mechanics: {
    type: [String],
    required: true,
  },
  era: {
    type: [String],
    required: true,
  },
  players: {
    type: String,
    required: true,
  },
  bestPlayers: {
    type: Number,
    default: null,
  },
  age: {
    type: Number,
    required: true,
  },
  difficulty: {
    type: Number,
    default: null,
  },
  rating: {
    type: Number,
    default: null,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  iconImage: {
    type: String,
    required: true,
  },
  galleryImages: {
    type: [String],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  sold: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
