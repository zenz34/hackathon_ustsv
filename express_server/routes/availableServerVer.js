const express = require("express");
const path = require("path");
const fs = require("fs");
const availableServerVerModel = require("../models/availableServerVer");
const router = express.Router();

//  get available server versions by company name
router.get("/:companyName", function(request, response, next) {
    console.log("route: availableServerVer");
    let companyNameVal = request.params.companyName;
    console.log(companyNameVal);
    //  find by company name
    availableServerVerModel.find({ companyName: companyNameVal }, function(
        err,
        res
    ) {
        if (err) {
            response.status(500).json(err);
        }

        if (!res) {
            response.status(200).json("Not Found!");
        } else {
            console.log("get available servers versions of a single company! ");
            console.log(res);
            response.status(200).json(res);
        }
    });
});

module.exports = router;
