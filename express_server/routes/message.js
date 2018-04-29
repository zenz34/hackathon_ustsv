const express = require("express");
const msgModel = require("../models/message");
const router = express.Router();

//  1 create new message
//  2 send the email to Head of Marketing’s email address
//  body : {name:""  email:""  question:""}
router.post("/", function(request, response, next) {
    let body = request.body;

    console.log("Router:  message    ");
    console.log(body.name);
    console.log(body.email);
    console.log(body.question);

    msgModel.create(body, function(err, document) {
        if (err) {
            response.status(500).json(err);
            return;
        }

        response.status(200).send("Insert OK! document id : " + document.id);
    });
});

module.exports = router;
