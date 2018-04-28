const express = require("express");
const path = require("path");
const fs = require("fs");
const usersModel = require("../models/User");
const router = express.Router();

// const haochuan = new User({
// firstName: "Haochuan",
// lastName: "Liu",
// website: "tutorial.haochuan.io",
// email: "haochuan.cs@gmail.com",
// password: "123456",
// companyName: "SoundHound",
// created_at: new Date(),
// updated_at: new Date()
// });
// haochuan.save(err => {
//     if (err) throw err;
//     console.log("User has been saved.");
// });

//  create new user
router.post("/", function(request, response, next) {
    let body = request.body;

    usersModel.create(body, function(err, document) {
        if (err) {
            response.status(500).json(err);
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
        }

        if (!res) {
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
        }
        console.log(users);
        response.status(200).json(users);
    });
    //console.log("result type is :" +  typeof(result));
    //let jsonRet = JSON.stringify(result);
    //console.log("result type is :" + typeof (jsonRet));
    // how to print json object?
});

// router.put("/:userId", function(request, response, next) {
//     console.log("user.js update come here");
//     console.log(request.params.userId);
//     let body = request.body;
//     console.log("user.js update body : " + body);
//     usersModel.findByIdAndUpdate(
//         request.params.userId,
//         request.body,
//         { new: true },
//         function(err, res) {
//             if (err) {
//                 response.status(500).json(err);
//             }

//             if (!res) {
//                 response.status(200).json("Not Found!");
//             } else {
//                 response.status(200).json(res);
//             }
//         }
//     );
// });

// router.delete("/:userId", function(request, response, next) {
//     console.log(request.params.userId);

//     //  find by id version  arrow function
//     usersModel.findByIdAndRemove(request.params.userId, function(err, user) {
//         if (err) {
//             response.status(500).json(err);
//         }
//         if (!user) {
//             response.status(200).json("Document Not Found!");
//         } else {
//             response.status(200).json(user + " \n was removed! ");
//         }
//     });
// });

module.exports = router;
