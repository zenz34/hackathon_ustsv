/*
GET /api/serversStats/
body
{
  companyName: ""
}

response:
  500 internal error

  200 OK

body
{
    companyName: "",
    companyStats: [

    ],
}



Update the version of 1 single server

POST /api/serversStats/
body
{
    companyName: "",
    serverName: ""
    newVersionNum: ""
}

response:
  500 internal error

  200 OK
serverStats of that company
{
    companyName: "",
    companyStats: [

    ],
}
*/

const express = require("express");
const path = require("path");
const fs = require("fs");
const serverModel = require("../models/ServersStats");
const router = express.Router();

//  get servers stats of a single company
router.get("/:companyName", function(request, response, next) {
    console.log("route: serversStats");
    let companyNameVal = request.params.companyName;
    console.log(companyNameVal);
    //  find by company name
    serverModel.find({ companyName: companyNameVal }, function(err, res) {
        if (err) {
            response.status(500).json(err);
            return;
        }

        if (!res || res.length === 0) {
            response.status(200).json("Not Found!");
        } else {
            console.log("get servers stats of a single company! ");
            console.log(res);
            response.status(200).json(res);
        }
    });
});

// // update software
//  need   req body {companyName:, serverName:, newVersionNum: ,}
router.post("/", function(request, response, next) {
    console.log("serversStats.js post come here, to update software version");

    //  request.body
    let body = request.body;
    let companyNameVal = body.companyName;
    let toUpdateServerName = body.serverName;
    let serverNewVerNum = body.newVersionNum;

    console.log("Users.js post  body : " + JSON.stringify(body));

    serverModel.find({ companyName: companyNameVal }, function(err, documents) {
        if (err) {
            response.status(500).json(err);
            return;
        }

        // console.log("post");
        console.log(documents);

        // update the serverStat
        let newServerStatArr = documents[0].serversStatus.map(server => {
            if (server.serverName === toUpdateServerName) {
                server.versionNum = serverNewVerNum;
            }
            return server;
        });

        if (newServerStatArr !== undefined) {
            documents[0].save(function(err) {
                if (err) throw err;

                response.status(200).json(documents[0]);
            });
        }
    });
});

// //  Get a single user document based on the userId route parameter
// router.get("/:userId", function(request, response, next) {
//     console.log("user.js get one user by id come here");
//     console.log(request.params.userId);

//     //  find by id version  arrow function
//     usersModel.findById(request.params.userId, function(err, res) {
//         if (err) {
//             response.status(500).json(err);
//         }

//         if (!res) {
//             response.status(200).json("Not Found!");
//         } else {
//             response.status(200).json(res);
//         }
//     });
// });

// router.get("/", function(request, response, next) {
//     console.log("user.js get all users come here");
//     usersModel.find({}, function(err, users) {
//         if (err) {
//             response.status(500).json(err);
//         }
//         console.log(users);
//         response.status(200).json(users);
//     });
//     //console.log("result type is :" +  typeof(result));
//     //let jsonRet = JSON.stringify(result);
//     //console.log("result type is :" + typeof (jsonRet));
//     // how to print json object?
// });

module.exports = router;
