const express = require("express");
const demoReqModel = require("../models/demoRequest");
const router = express.Router();

//  1 create new request
//  2 send the email to Head of Sale’s email address
/*  body :     
{
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    companyName: Schema.Types.String,
    email: Schema.Types.String,
    firstName: Schema.Types.String,
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

        response.status(200).send("Insert OK! document id : " + document.id);
    });
});

module.exports = router;
