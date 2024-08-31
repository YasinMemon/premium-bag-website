const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
    },
    email: {
        type: String,
    },
    password: String,
    products: {
        type: Array,
        default: [],
    },
    gistin: String,
    picture: String,
});

module.exports = mongoose.model('admin', adminSchema);