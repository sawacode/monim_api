const express = require("express");
const userController = require('../controllers/userController');
const sendMailController = require('../controllers/sendMailController');
const sendSMSController = require('../controllers/sendSMSController');
const notificationController = require('../controllers/notificationController');
const deleteAccountController = require('../controllers/deleteAccountController');
const auth = require('../http/middleware/auth');
const upload = require('../utils/upload');//Uploader des medias

userRoute = express.Router();

userRoute.route("/notifications").post(notificationController.all);
userRoute.route("/mark/as/read").post(notificationController.markAsRead); //Marquer comme lu
/* Utilisateurs */
userRoute.route("/user/register").post(userController.register); //Création de user
userRoute.route("/user/login").post(userController.login); //Authentification de l'utilisateur
userRoute.route("/user/profile").post(auth, userController.profile); //Profile utilisateur
userRoute.route("/update/user/name").put(auth, userController.updateUserName); //Mettre à jour le nom de l'utilisateur
userRoute.route("/update/user/email").put(auth, userController.updateEmail); //Mettre à jour l'adresse email
userRoute.route("/update/user/phone").put(auth, userController.updatePhone); //Update contacte
userRoute.route("/update/password").put(auth, userController.updatePassword); //Update contacte
userRoute.route("/add_or_update/user/image").post(auth, upload.media("user").single('avatar'), userController.addOrUpadeUserImage);

userRoute.route("/auth/user").post(auth, userController.auth); //Authentification de l'utilisateur

//Vérifier si l'adresse email ou le numéro existe
userRoute.route("/verify/address/and/number/existe").post(userController.verifyAddressAndNumber);
//Réinitiliser le mot de passe
userRoute.route("/reset/password").post(sendMailController.resetPassword);
//Vérification du code de réinitialisation
userRoute.route("/reset/password/code/confirmation").post(userController.verifyCodeForResetPassword);
//Créer un nouveau mot de passe 
userRoute.route("/create/new/password").post(userController.createNewPassword);
//Envoie de code de confirmation de l'adresse mail
userRoute.route("/send/adresse_mail/code").post(sendMailController.sendCodeConfirmEmail);
//Envoie de code de confirmation du numéro de téléphone
userRoute.route("/send/tel/code").post(sendSMSController.sendCodeConfirm);
//Vérification du mail
userRoute.route("/verify/email").post(sendMailController.verifyCode);

//Demande de suppression de compte
userRoute.route('/delete/account').post(auth, deleteAccountController.create);
//Vérifier la demande
userRoute.route('/get/delete/account').post(auth, deleteAccountController.getAsk);

module.exports = userRoute;