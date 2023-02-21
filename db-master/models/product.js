const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
});
const product = new mongoose.model('Product', schema);
module.exports = product;