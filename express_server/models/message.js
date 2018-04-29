const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create new schema
//  name:""  email:""  question:""

const messageSchema = new Schema({
    name: Schema.Types.String,
    email: Schema.Types.String,
    question: Schema.Types.String
});

const message = mongoose.model("message", messageSchema, "messages");

module.exports = message;
