// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let User = new Schema({
            name: {
                type: String
            },
            email: {
                type: String
            },
            score: {
                type: Number
            },
            net_salary: {
                type: Number
            }},
            {
                collection: 'users'
            });

        module.exports = mongoose.model('User', User);