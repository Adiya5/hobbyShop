const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    adm_f_name: {
        type: String,
        required: true,
    },
    adm_s_name: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
    },
    type: {
        type: String
    }

});
const admin = new mongoose.model('Admin', schema);
module.exports = admin;