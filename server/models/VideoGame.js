const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const videoGameSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    title: String,
    difficulty: String,
    date: {
        type: Date,
    },
    notes: String,
});

const VideoGame = mongoose.model("videoGame", videoGameSchema);

module.exports = VideoGame;
