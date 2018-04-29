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

module.exports = router;
