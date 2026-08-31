const express = require("express");
const auth_admin = require('../http/middleware/admin_auth');
const upload = require('../utils/upload');//Uploader des medias
const pubController = require('../controllers/pubController');
pubRoute = express.Router();
//Ajout de l'image de publicité
pubRoute.route("/admin/add/pub/image").post(auth_admin, upload.media("pub").single("pub_image"), pubController.add);
pubRoute.route("/all/pubs").get(pubController.all);

module.exports = pubRoute;
