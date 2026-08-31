const express = require("express");
const paiementMethodController = require("../controllers/paiementMethodController");
const subscriptionPlanController = require('../controllers/subscriptionPlanController');
const auth = require('../http/middleware/auth');
const auth_admin = require('../http/middleware/admin_auth');
const upload = require('../utils/upload');//Uploader des medias

subscriptionRoute = express.Router();

//Demande de verification de paiement
subscriptionRoute.route("/payment_request").post(auth, upload.media("payment_request").single("image_request"), subscriptionPlanController.sendRequest);
//Liste des packs de souscription
subscriptionRoute.route("/country/:country_id/subscription/packs").get(subscriptionPlanController.all);
//Détail du pack
subscriptionRoute.route("/pack/:pack_id").get(subscriptionPlanController.show);
//Liste de mode de paiement
subscriptionRoute.route("/country/:country_id/paiement/methods").post(paiementMethodController.all);

////////// ADMIN ///////////////////
//Validation du paiement
subscriptionRoute.route("/validate/payment_request/:payment_request_id").post(auth_admin, subscriptionPlanController.validatePaymentPlan);
//Annulation du paiement
subscriptionRoute.route("/cancel/payment_request/:payment_request_id").post(auth_admin, subscriptionPlanController.cancelTheTransaction);


module.exports = subscriptionRoute;