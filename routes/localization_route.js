const express = require("express");
const countryController = require('../controllers/countryController');

localizationRoute = express.Router();
//Liste des pays
localizationRoute.route("/countries").get(countryController.all);
localizationRoute.route("/country/default/selected").get(countryController.defaultSelect);

module.exports = localizationRoute;