const express = require("express");
const path = require("path");

const mongodbConnect = require("./config/database");
const env = require("./config/env");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
// call the init function in ./config/database.js to setup the connection
// to mongodb

mongodbConnect();

/*===========================
=            Mongodb Playground            =
===========================*/

/*=====  End of Mongodb Playground  ======*/

/*==================================
=            Middleware            =
==================================*/

// body parser for json format
app.use(bodyParser.json());
// serve static files
// app.use("/static", express.static(path.join(__dirname, "public", "static")));

//  {email: "", password: ""}
/*
search through users collection, 
    found that document
        fetch serverStats by companyName through serversStats collection
    Not Found that document,  means user dose not exist
        response 400? Not Found

*/

// function(req, res) {
//     login_process(req.body.email, req.body.password);
//     next();
// });

/*=====  End of Middleware  ======*/

/*===========================
=            Routes            =
===========================*/

app.use("/api/users", routes.users);
app.use("/api/serversstats", routes.serversStats);
app.use("/api/availableserversvers", routes.availabeServerVer);
app.use("/api/authentication", routes.authentication);
app.use("/api/message", routes.message);
app.use("/api/demorequest", routes.demoReq);

/*=====  End of Routes  ======*/

module.exports = app;
