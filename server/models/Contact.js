const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: String,
    email: String,
    phone: String,
    message: String,
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;
