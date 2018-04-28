const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// create new schema
const availableServerVerSchema = new Schema({
    companyName: { type: String, unique: true },
    serversVersions: Schema.Types.Mixed
});
/* 
    serversVersions: [{
            serverName: String,
            versions: [String,String,String,String,...String]
        }
    ],
*/

// the schema is useless so far
// we need to create a model using it
const availableServerVer = mongoose.model(
    "availableServerVer",
    availableServerVerSchema,
    "available_software_versions"
);

// make this available to our users in our Node applications
module.exports = availableServerVer;
