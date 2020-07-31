const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MblogSchema = new Schema ({
    author: String,
    blog_text: String
});

module.exports = mongoose.model('Mblog', MblogSchema);
