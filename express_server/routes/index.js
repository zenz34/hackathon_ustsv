/**
 *
 * Entry point for all routes
 *
 */

const users = require("./users");
const serversStats = require("./serversStats");
const availabeServerVer = require("./availableServerVer");
const authentication = require("./authentication");
const message = require("./message");
const demoReq = require("./demorequest");
module.exports = {
    users,
    serversStats,
    availabeServerVer,
    authentication,
    message,
    demoReq
};
