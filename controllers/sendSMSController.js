const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');
const nodemailer = require("nodemailer");
const  uniqueCode = require('../utils/uniqueId.utils');
const verifyEmailAdress = require("../mail/verify_email_address");
const { response } = require("express");
const sendSMS = require("../sms/sms_request");
const date = new Date();

module.exports = {
	sendCodeConfirm: (req,res)=>{
		let tel = req.body.address_email;
		iAsync.waterfall([
			 (done) => {

			 	let code = uniqueCode.generateUniqueIntCode(5);
			 	model.email_verified_codes.findOne({
			 		where : {email: tel}
			 	}).then((_identifiant)=>{

			 		done(null, code, _identifiant);

			 	}).catch((error)=>{
			 		//console.log("xxxxxxxxxxx"+error);
			 		return res.status(501).json({
			 			status:501,
						error : ""+error
					});
			 	})
			  
			},(code, _identifiant, done)=>{

				if (!_identifiant) {
					model.email_verified_codes.create({
						email: tel,
						code: code,
						created_at: date.getTime(),
					}).then((newIdentifiant)=>{

						done(code, newIdentifiant)

					}).catch((error)=>{
			 		return res.status(500).json({
			 			status: 500,
						error : ""+error
					});
			 	})
			  
				}else{
					_identifiant.code = code;
					_identifiant.updated_at = date.getTime();
					_identifiant.save();
					done(code, _identifiant);
				}
			}
			
		],async (code, newIdentifiant)=>{
			if (code && newIdentifiant) {
				try {
					
					//const response = await sendSMS.sendeTelConfirmationCode(tel, "Votre code a usage unique: "+code);
					return res.status(200).json({
						status: 200,
						email: newIdentifiant.email,
						code: newIdentifiant.code
					});
				} catch(error) {
					return res.status(500).json({
					   status: 500,
					   error : ""+error
					});
				}
			}else{
				return res.status(404).json({
					status: 404,
					error : "Not code",
				});
			}
			
		});
	},
}