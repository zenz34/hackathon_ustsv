const express = require("express");
const demoReqModel = require("../models/demoRequest");
const router = express.Router();
const nodeMailer = require("nodemailer");
//  1 create new request
//  2 send the email to Head of Sale’s email address
/*  body :     
{
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    companyName: Schema.Types.String,
    email: Schema.Types.String,
    phone: Schema.Types.String,
    Role: Schema.Types.String,
    description: Schema.Types.String
}
*/
router.post("/", function(request, response, next) {
    let body = request.body;

    console.log("Router:  demorequest    ");
    console.log(body);

    demoReqModel.create(body, function(err, document) {
        if (err) {
            response.status(500).json(err);
            return;
        }

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
            subject: `demo request from ${body.firstName} ${body.lastName}`,
            text: `send from  ${body.firstName} ${body.lastName}\n
                Role: ${body.Role} \n
                email address: ${body.email} \n 
                phone: ${body.phone} \n
                question: ${body.description}`
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
        response.status(200).send("Insert OK! document id : " + document.id);
    });
});
/*
var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "zacharyzhao1986@gmail.com",
        pass: "N2294927yc"
    }
});

var mailOptions = {
    from: "zacharyzhao1986@gmail.com",
    to: "behappyzachary@yahoo.com",
    subject: "demo request",
    text: "123"
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
*/
module.exports = router;
