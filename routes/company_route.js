const express = require("express");
const companyController = require('../controllers/companyController');
const auth = require('../http/middleware/auth');
const upload = require('../utils/upload');//Uploader des medias

const companyRoute = express.Router();
/* Company */
//upload.media("company").single('avatar')
companyRoute.route("/store/user/and/company").post(companyController.storeWithUser); //Créer un agent et son agence
companyRoute.route("/store/company").post(upload.media("company").single('avatar'), companyController.store); // Créer un compte agence
companyRoute.route("/company/:company_id").post(companyController.show); // Affichez les informations de l'agence et son utilisateur
//Annonce ajoutées
companyRoute.route("/company/realestate/added/type/:type_slog").post(auth, companyController.companyRealstateByType);
companyRoute.route("/all/company/realestates/limit/:limit").post(auth, companyController.allCompanyRealstate);
companyRoute.route("/update/company/:company_id").put(auth, companyController.updateCompany);
//Mettre en ligne
companyRoute.route("/put/realestate/:id/inlineOrOffline").put(auth, companyController.productInlineOrOffline);
//Supprimer un bien
companyRoute.route("/company/delete/realestate/:id").delete(auth, companyController.deleteProduct);
//Ajouter une image de l'agence
companyRoute.route("/add_or_update/company/image").post(auth, upload.media("company").single('avatar'), companyController.addOrUpadeImage);
//Liste des histories de souscription de pack
companyRoute.route("/company/subscription/histories").post(auth, companyController.histories);

module.exports = companyRoute;