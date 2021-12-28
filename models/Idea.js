const mongoose = require('mongoose');

const IdeaSchema = mongoose.Schema({
    idea: {
        type: String,
        required: true
    },
    for: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Ideas', IdeaSchema);