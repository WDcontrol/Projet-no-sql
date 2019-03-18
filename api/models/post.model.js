// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let Post = new Schema({
        title: {
            type: String
        }, 
        body: {
            type: String
        },
        active: {
            type: Boolean,
            default:false
        },
        user: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required:true
        }],
    }

    , {
        collection: 'posts'
    });

module.exports = mongoose.model('Post', Post);