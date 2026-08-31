const express = require("express");
const promotionalCodeController = require('../controllers/promotionalCodeController');
const auth = require('../http/middleware/auth');

promotionalRoute = express.Router();
//Code promo route
promotionalRoute.route("/verify/promotional/code").post(auth, promotionalCodeController.verifyCode);
promotionalRoute.route("/apply/promotional/code").post(auth, promotionalCodeController.applyCode);

module.exports = promotionalRoute;