const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create new schema
const serverStatsSchema = new Schema({
    companyName: { type: String, unique: true },
    serversStatus: Schema.Types.Mixed
});
/* 
    serversStatus: [
        serverName: String,
        status: String,
        startTime: String,
        lasted: String)
    ],

*/

// the schema is useless so far
// we need to create a model using it
const ServersStats = mongoose.model(
    "ServerStats",
    serverStatsSchema,
    "serversstatistic"
);

// make this available to our users in our Node applications
module.exports = ServersStats;
