const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    adm_type: {
        type: String,
        required: true,
    },
    permissions: {
        type: String,
        required: true,
    },
});
const admintype = new mongoose.model('AdminType', schema);
module.exports = admintype;