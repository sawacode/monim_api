const express = require("express");
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController');
const conditionController = require('../controllers/conditionController');
const propetySearchController = require('../controllers/propertySearchController');
const favoriteController = require('../controllers/favoriteController');
const subscriptionMiddleware = require("../http/middleware/subscription");
const auth = require('../http/middleware/auth');
const upload = require('../utils/upload');//Uploader des medias

const realestateRoute = express.Router();
/* Les biens immobiliés */
realestateRoute.route("/realestates/limit/:limit").post(productController.all); //Récupérer les biens immobiliers
realestateRoute.route("/realestates/country/:country_id/limit/:count").post(productController.allByCountry); //Récupérer les biens immobiliers
realestateRoute.route("/realestate/:realestate_id").post(productController.show); //Afficher un biens immobiliers
realestateRoute.route("/realestates/limit/:count").post(productController.all); //Récupérer un nombre limité de biens immobiliers
realestateRoute.route("/realestates/condition/:condition_id").post(productController.allByConditionIdOrSlug); //Filtrer par condition
realestateRoute.route("/realestates/condition/:condition_id/limit/:count").post(productController.allByConditionIdOrSlug); //Filtrer par condition avec limite
realestateRoute.route("/realestates/type/:type_id/country/:country_id/limit/:count").post(productController.allByTypeIdOrSlug); //Filtrer les données par type
realestateRoute.route("/like/dislike/realestate/:product_id").post(auth, productController.likeOrDislike); // Liker or dislike
//realestateRoute.route("/categorie/:categorie_id/realestates").get();
realestateRoute.route("/more/realestate/:type_slug/:condition_slug/:categorie_slug/:country_id/limit/:count").post(productController.moreProductByCountry);
realestateRoute.route("/search/realestate").post(productController.search); //Recherche de bien

realestateRoute.route("/add/favorite/:realestate_id").post(auth, favoriteController.store);//Ajouter au favoris
realestateRoute.route("/all/user/favorites").post(auth, favoriteController.all); //Liste des favories de l'utilisateur

//Ajouter un maison
realestateRoute.route("/store/realestate/house").post(subscriptionMiddleware.expired, auth, upload.media("products").array('media'), productController.store); //Créer un bien immobilier
realestateRoute.route("/update/realestate/:realestate_id").put(subscriptionMiddleware.expired, auth, productController.update); // Modifier un bien immobilier
realestateRoute.route("/delete/realestate/image/:id").delete(auth, productController.deleteImage);
realestateRoute.route("/add/new/image/realestate/:id").post(auth, upload.media("products").array('newmedia'), productController.addNewImage);

/*Les conditions*/
realestateRoute.route("/conditions").post(conditionController.all); //Réccupérer toutes les conditions
realestateRoute.route("/conditions/their/realestates").post(conditionController.allTheirProduct);//Réccupérer toutes les conditions avec leurs produits
realestateRoute.route("/condition/:condition_slog/realestates").post(conditionController.allByConditionSlogOrId); //Réccupérer une condition avec ses articles
realestateRoute.route("/condition/:condition_slog/realestates/limit/:count").post(conditionController.allByConditionSlogOrId); //Filtrer par condition à un nombre limité

//Toutes les catégories
realestateRoute.route("/categories").post(categoryController.all);
//Articles par categorie
realestateRoute.route("/country/:country_id/category/:categorie_id/realestates/limit/:limit").post(categoryController.productByCategorie);
//Store property
realestateRoute.route("/add/property/search").post(auth, propetySearchController.store);
realestateRoute.route("/properties/searchs").post(auth, propetySearchController.all);
realestateRoute.route("/put/propertie/search/:id/offOrOn").put(auth, propetySearchController.putOffOrOn);
realestateRoute.route("/update/propertie/search/:id").put(auth, propetySearchController.update);
realestateRoute.route("/delete/propertie/search/:id").delete(auth, propetySearchController.delete);
realestateRoute.route("/properties/searchs/result").post(auth, propetySearchController.foundPropertiesSearchByUser);
//Toutes information néccessaires pour l'enregistrement d'un bie,
realestateRoute.route("/realstate/option/and/type").post(productController.realStateOption);
//Demande de bien
realestateRoute.route("/properties/search/by/users").post(auth, propetySearchController.notififyCompany);

module.exports = realestateRoute;