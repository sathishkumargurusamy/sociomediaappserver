const mongoose = require('mongoose');


const Storyschema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    story: {
        type: String
    },
    time: { type: Date, default: Date.now }
});

const story = module.exports = mongoose.model('story', Storyschema);