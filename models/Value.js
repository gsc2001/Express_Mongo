const mongoose = require('mongoose');

const ValueSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Value', ValueSchema);
