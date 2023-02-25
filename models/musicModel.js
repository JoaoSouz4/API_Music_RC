const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    title: String, 
    description: String, 
    style: String,
    url: String
});

const music = mongoose.model("Music", musicSchema);
module.exports = music;