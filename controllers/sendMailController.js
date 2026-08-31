const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');
const nodemailer = require("nodemailer");
const  uniqueCode = require('../utils/uniqueId.utils');
const verifyEmailAdress = require("../mail/verify_email_address");
const { response } = require("express");
const date = new Date();



module.exports = {
	//Enrégistrement du code e vérification de l'adresse mail
	sendCodeConfirmEmail: (req,res)=>{
		let address_email = req.body.address_email;
		iAsync.waterfall([
			 (done) => {
			 	let code = uniqueCode.generateUniqueIntCode(5);
			 	model.email_verified_codes.findOne({
			 		where : {email: address_email}

			 	}).then((_email)=>{

			 		done(null, code, _email);

			 	}).catch((error)=>{

			 		return res.status(501).json({
			 			status:501,
						error : ""+error
					});
			 	})
			  
			},(code, _email, done)=>{

				if (!_email) {
					model.email_verified_codes.create({
						email: address_email,
						code: code,
						created_at: date.getTime(),

					}).then((newEmail)=>{

						done(code, newEmail);

					}).catch((error)=>{
			 		return res.status(500).json({
			 			status: 500,
						error : ""+error
					});
			 	})
			  
				}else{

					_email.code = code;
				    _email_email.updated_at = date.getTime();
					_email.save();
					done(code, _email);
				}
			}
			
		],(code, newEmail)=>{
			if (code && newEmail) {
				try {
					//Envoie de mail
					verifyEmailAdress.sendcode(address_email, {code: newEmail.code});
					//Retour de la reponse
					return res.status(200).json({
						status: 200,
						email: newEmail.email,
						code: newEmail.code
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

	//Vérification de code
	verifyCode: (req, res)=>{
		let address_email = req.body.address_email;
		let code = req.body.code;
		iAsync.waterfall([

			(done)=>{
				model.email_verified_codes.findOne({
					where: [{email: address_email},{code: code}]
				}).then((verified)=>{
					done(null,verified);
				}).catch((error)=>{
					return res.status(501).json({
						status: 501,
						error : ""+e
					});
				})
			},(verified, done)=>{
				if(verified){
					model.email_verified_codes.destroy(
					{where: {email: address_email}});
				}
				done(verified);
			}

		],(verified)=>{
			if (verified) {
				return res.status(200).json({
					status: 200,
					code: verified.code,
					email: verified.email,
				})
			}else{
				return res.status(404).json({
					status: 404,
					error: "Incorrect code!"
				})
			}
		})
	},

	resetPassword: (req, res)=>{
        const identifier = req.body.identifier;
        const code = uniqueCode.generateUniqueIntCode(6);

        let resetToken = null;

        iAsync.waterfall([
            (done)=>{
                model.users.findOne({
             where: {
                [Op.or]: [{ email: identifier }, { phone: identifier }]
            }
            }).then((user)=>{
                done(null, user);
            }).catch((error)=>{
                 return res.json({
                    status: 500,
                    error: "1 "+error,
                    data: null
                });
            })
            },(user,done)=>{
            	
                if (user) {

                	 model.password_reset_tokens.findOne({
                	 	where: {email: identifier}
                	 }).then((value)=>{

                	 	resetToken = value;
                	 	done(null,user,resetToken);
                	 
                	 }).catch((err)=>{
	                     return res.json({
	                        status: 500,
	                        success: false,
	                        error: ""+err,
	                        data: null
	                      });
                   	});

                }else{
                	
                   return res.status(200).json({
                        status: 404,
                        success: false,
                        error: "User not found",
                        data: null,
                    });

                }
            },(user, resetToken,done)=>{
            	//Générer le code
            	if (!resetToken) {

            		model.password_reset_tokens.create({
	                    email: identifier,
	                    token: code,
	                    created_at: date.getTime()

                   }).then((value)=>{
                   	  resetToken = value;
                      done(user, resetToken);

                   }).catch((err)=>{
                     return res.json({
                        status: 500,
                        success: false,
                        error: ""+err,
                        data: null
                      });
                   });

            		
            	}else{

            		resetToken.token = code;
            		resetToken.created_at = date.getTime();
            		resetToken.save();

            		done(user, resetToken);
            	}
            }

        ],(user, resetToken)=>{
        	
            if(user && resetToken){
            	try {
            		let result = verifyEmailAdress.sendcode(user.email, {code: resetToken.token});
	              	return res.status(200).json({
						status: 200,
						email: user.email,
						success: true,
						code: resetToken.token
					}); 
            	} catch(e) {
            		return res.json({
                    status: 500,
                    success: false,
                    error: "Requeste error",
                    data: null
                });
            	}
                 	
            }else{
                return res.json({
                    status: 500,
                    success: false,
                    error: "Requeste error",
                    data: null
                });
            }
        });
        
    }, 
}