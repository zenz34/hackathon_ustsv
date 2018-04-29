/*
search through users collection, 
    found that document, get the companyName
        fetch serverStats by companyName through serversStats collection
    Not Found that document,  means user dose not exist
        response 400? Not Found
*/

// dizhu@gmail.com   123   should get Goole
// then get serversStats

const express = require("express");
// const path = require("path");
// const fs = require("fs");
const availableServerVerModel = require("../models/availableServerVer");
const router = express.Router();

const usersModel = require("../models/User");
const serversStatsModel = require("../models/ServersStats");

router.post("/", function(request, response, err) {
    let email = request.body.email;
    let password = request.body.password;

    console.log("authentication");
    console.log(email);
    console.log(password);

    //  find user
    usersModel.find(
        {
            email: email,
            password: password
        },
        function(err, documents) {
            if (err) {
                response.status(500).json(err);
                return;
            }

            if (!documents || documents.length === 0) {
                response.status(200).json("Not Found!");
                return;
            } else {
                console.log("documents[0]");
                console.log(documents[0]);
                console.log("companyName");
                console.log(documents[0].companyName);
                serversStatsModel.find(
                    {
                        companyName: documents[0].companyName
                    },
                    function(err, documents) {
                        if (err) {
                            response.status(500).json(err);
                            return;
                        }

                        console.log(documents[0]);
                        if (!documents || documents.length === 0) {
                            response.status(205).json("Not Found!");
                        } else {
                            response.status(200).json(documents[0]);
                        }
                    }
                );
            }
        }
    );
});

module.exports = router;
