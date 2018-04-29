// const mongoose = require("mongoose");
// const db = mongoose.connection;

// function init() {
//     mongoose.connect("mongodb://127.0.0.1:27017/yourDatabase");
// }
// db.once("open", function() {
//     console.log("mongodb connected.");
// });

// module.exports = init;

const mongoose = require("mongoose");
const db = mongoose.connection;

var mongodbUri = "mongodb://root:root@ds161539.mlab.com:61539/cloudserver";

function init() {
    mongoose.connect(mongodbUri);
}

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
    console.log("mongodb connected.");
});

module.exports = init;
