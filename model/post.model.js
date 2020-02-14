const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    postTitle: {
        type: String
    },
    postBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'posts'
})

module.exports = mongoose.model('PostSchema', postSchema)