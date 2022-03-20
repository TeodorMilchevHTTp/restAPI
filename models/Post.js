const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    label: {
        type: String
    },
    album: {
        type: String,
        required: true
    },
    song: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema)