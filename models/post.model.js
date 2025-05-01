const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    postText: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    likes: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('post', postSchema);
