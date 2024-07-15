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
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    players: {
        type: String,
        required: true,
    },
    bestPlayers: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    releaseYear: {
        type: Number,
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
}, {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
