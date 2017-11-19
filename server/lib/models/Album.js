const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    photos: [{
        type: Schema.Types.ObjectId,
        ref: 'Photo'
    }]
});

module.exports = mongoose.model('Album', schema);