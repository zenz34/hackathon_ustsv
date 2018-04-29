const express = require("express");
const msgModel = require("../models/message");
const router = express.Router();
const nodeMailer = require("nodemailer");

let mailOptions;

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

        var transporter = nodeMailer.createTransport({
            service: "gmail",
            auth: {
                user: "zacharyzhao1986@gmail.com",
                pass: "G2294927z"
            }
        });

        const mailOptions = {
            from: "zacharyzhao1986@gmail.com",
            to: "behappyzachary@gmail.com",
            subject: `message from ${body.name}`,
            text: `send from  ${body.name}\n
                email address: ${body.email} \n 
                question: ${body.question}`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    });
});

module.exports = router;
