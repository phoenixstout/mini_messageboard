const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  author: { type: String, required: true, maxLength: 15 },
  content: { type: String, required: true, minLength: 1, maxLength: 50 },
  date: {type: Date}
});

module.exports = mongoose.model('message', MessageSchema)
