/**
 *
 * Entry point for all routes
 *
 */

const users = require("./users");
const serversStats = require("./serversStats");
const availabeServerVer = require("./availableServerVer");

module.exports = {
    users,
    serversStats,
    availabeServerVer
};
