const express = require("express");
const appVersionController = require('../controllers/appVersionController');

appConfigRoute = express.Router();
//App mobile version 
appConfigRoute.route("/mobile/version").post(appVersionController.getVersion);

module.exports = appConfigRoute;