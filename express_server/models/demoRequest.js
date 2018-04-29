const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const demoReqSchema = new Schema({
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    companyName: Schema.Types.String,
    email: Schema.Types.String,
    phone: Schema.Types.String,
    Role: Schema.Types.String,
    description: Schema.Types.String
});

const demoReq = mongoose.model("demoReq", demoReqSchema, "demorequests");

module.exports = demoReq;
