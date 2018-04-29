const express = require("express");
const path = require("path");
const fs = require("fs");
const usersModel = require("../models/User");
const router = express.Router();

//  create new user
router.post("/", function(request, response, next) {
    let body = request.body;

    usersModel.create(body, function(err, document) {
        if (err) {
            response.status(500).json(err);
            return;
        }

        body.created_at = new Date();
        body.update_at = new Date();

        response.status(200).send("Insert OK! document id : " + document.id);
    });
});

//  Get a single user document based on the userId route parameter
router.get("/:userId", function(request, response, next) {
    console.log("user.js get one user by id come here");
    console.log(request.params.userId);

    //  find by id version  arrow function
    usersModel.findById(request.params.userId, function(err, res) {
        if (err) {
            response.status(500).json(err);
            return;
        }

        if (!res || res.length === 0) {
            response.status(200).json("Not Found!");
        } else {
            response.status(200).json(res);
        }
    });
});

router.get("/", function(request, response, next) {
    console.log("user.js get all users come here");
    usersModel.find({}, function(err, users) {
        if (err) {
            response.status(500).json(err);
            return;
        }
        console.log(users);
        response.status(200).json(users);
    });
});

module.exports = router;
