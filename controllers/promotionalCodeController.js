const { Op,Sequelize } = require("sequelize");
const iAsync = require("async");
const jwtUtils = require("../utils/jwt.utils");
const helper = require("../utils/helper.utils");
const model = require("../models");
const config = require("../config/app");
const date = new Date();

module.exports = {
	verifyCode: (req, res)=>{
		const code = req.body.code;
		//console.log("Codexxxxxxxxxxxxxxxxxx",code);
		const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
		iAsync.waterfall([
			//Rechercher le code
			(done)=>{
				model.promotional_codes.findOne({
					where: {code: code,status: 1},
					include: [
						{
							model: model.users,
							attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
						}
					]
				}).then((promotional_code)=>{
					if(promotional_code){
						done(null,promotional_code);
					}else{
						return res.json({
							status: 404,
							success: false,
							data: "Not found"
						});
					}
				}).catch((error)=>{
					return res.json({
						status: 500,
						error: ""+error
					});
				})
			},
			(promotional_code, done)=>{
				model.companies.findOne({
			  		where:{user_id: user.userId}
			  	}).then((company)=>{
			  		done(null, promotional_code, company);
			  	}).catch((error)=>{
			  		return res.json({
		                status: 500,
		                error: "Company " + err,
	              	});
			  	})
			},
			 (promotional_code,company,done)=>{
			 	if(company){
	        		model.promotional_code_used_by_users.findOne({
	        			where: {user_id: user.userId, company_id: company.id, promotional_code_id: promotional_code.id}
	        		}).then((code_used)=>{
	        			done(promotional_code,company,code_used);
	        		}).catch((error)=>{
	        			return res.json({
			                status: 500,
			                error: "verify user code " + error,
		              	});
	        		});
        	  	}else{
        	  		return res.json({
			                status: 500,
			                error: "Company not found",
		              	});
        	  }
        	},
		],(promotional_code,company, code_used)=>{
			if(!code_used){
				if(promotional_code && promotional_code.number_of_time_used == promotional_code.usage_limit && promotional_code.status == false){
					return res.json({
							status: 404,
							success: false,
							data: "Not found"
						});
				}
			//Vérifier si l'user a l'autorisation d'utiliser le code
			  if(promotional_code.user !=null && promotional_code.user.id == user.userId && promotional_code.user.email == user.userEmail || promotional_code.user_id == null){
			  	return res.json({
			  		status: 200,
			  		success: true,
			  		data: promotional_code
			  	});
			  }else{
			  	return res.json({
			  		status: 401,
			  		success: false,
			  		data: "You are not authorized to use this promotional code"
			  	});
			  }
			}else{
				return res.json({
			            status: 409,
			            success: false,
			            data: "Code used by user",
		             });
			}
			
		});
	},
	applyCode: (req, res)=>{
		const code = req.body.code;
		const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);

        let transaction;
        iAsync.waterfall([
        	(done)=>{
        		model.sequelize
	            .transaction()
	            .then((_transaction) => {
	              transaction = _transaction;
	              done(null, transaction);
	            })
	            .catch((err) => {
	              return res.json({
	                status: 500,
	                error: "Transaction " + err,
	              });
	            });
        	},
        	(transaction,done)=>{
        		model.promotional_codes.findOne({
					where: {code: code, status: 1},
					include: [
						{
							model: model.users,
							attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
						}
					]
				},{transaction}).then((promotional_code)=>{
					if(promotional_code && promotional_code.number_of_time_used < promotional_code.usage_limit && promotional_code.status == true){
						done(null,transaction,promotional_code);
					}else{
						return res.json({
							status: 404,
							success: false,
							data: "Not found"
						});
					}
				}).catch((error)=>{
					return res.json({
						status: 500,
						error: "Promotional code"+error
					});
				})
        	},
        	(transaction,promotional_code,done)=>{
        	  if(code.user !=null && code.user.id == user.userId && code.user.email == user.userEmail || code.user_id == null){
			  	model.companies.findOne({
			  		where:{user_id: user.userId},
			  		include: [
			  		{ model: model.users,
			  			attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
			  			include: [
						{model: model.countries}
			  			]
			  		},
			  		
			  		]
			  	},{transaction}).then((company)=>{
			  		done(null, transaction, promotional_code, company);
			  	}).catch((error)=>{
			  		return res.json({
		                status: 500,
		                error: "Company " + error,
	              	});
			  	})
			  }else{
			  	return res.json({
			  		status: 401,
			  		success: false,
			  		data: "You are not authorized to use this promotional code"
			  	});
			  }
        	},
        	(transaction,promotional_code,company,done)=>{
        		model.promotional_code_used_by_users.findOne({
        			where: {user_id: user.userId, company_id: company.id, promotional_code_id: promotional_code.id}
        		}).then((code_used)=>{
        			done(null,transaction,promotional_code,company,code_used);
        		}).catch((error)=>{
        			return res.json({
		                status: 500,
		                error: "verify user code " + err,
	              	});
        		});
        	},
        	(transaction,promotional_code,company,code_used,done)=>{
        		if(!code_used){
	        		model.subscriptions.findOne({
	        			where: {user_id: user.userId,companie_id: company.id}
	        		},{transaction}).then((subscription)=>{
	        			try{
	        				subscription.s_number_of_properties += promotional_code.value;
	        				subscription.save({transaction});
	        				done(null, transaction, promotional_code,company,subscription, code_used);
	        			}catch(error){
	        				return res.json({
				                status: 500,
				                error: "Save subscription " + err,
		              		});
	        			}
	        		},{transaction})
	        		.catch((error)=>{
				  		return res.json({
			                status: 500,
			                error: "Company " + error,
		              	});
				  	})
        		}else{
        			return res.json({
			            status: 409,
			            success: false,
			            data: "Code used by user",
		             });
        		}
        	},
        	(transaction, promotional_code,company,subscription,code_used, done)=>{
        		model.pack_subscription_histories.create({
	              price: "0 "+ company.user.country.countries_currency,
	              start: null,
	              deadline: promotional_code.value,
	              status: 1,
	              wording: "Code promotionnel",
	              type: "number",
	              created_at: date.getTime(),
	              subscription_id: subscription.id,
	              companie_id: company.id,
	              user_id: user.userId
	            }, { transaction })
	            .then((pack_subscription_histories) => {
	              done(null,transaction, promotional_code,company,subscription,code_used);
	            }).catch((error) => {
	              return res.json({
	                status: 500,
	                error: "pack subscription histories " + error
	              });

	            });
        	},
        	(transaction, promotional_code,company,subscription,code_used,done)=>{
        		if(subscription && promotional_code){
        				promotional_code.number_of_time_used += 1;
	        			if(promotional_code.usage_limit == promotional_code.number_of_time_used){
	        				promotional_code.status = false;
	        				promotional_code.value = 0;
	        			}
	        			promotional_code.save({transaction})
	        			.then((va)=>{
	        				done(null,transaction, promotional_code,company,subscription,code_used);
	        			}).catch((error)=>{
	        				return res.json({
				                status: 500,
				                error: "Updat promotion codexx " + error
			             	});
	        			});
        		}else{
        			return res.json({
							status: 404,
							success: false,
							data: "Not found"
						});
        		}
        	},
        	(transaction, promotional_code,company,subscription,code_used, done)=>{
        		model.promotional_code_used_by_users.create({
        		   created_at: date.getTime(),
	               updated_at: date.getTime(),
	               user_id: user.userId,
	               promotional_code_id: promotional_code.id,
	               company_id: company.id
        		},{transaction}).then((create)=>{
        			done(transaction, promotional_code,company,subscription,code_used);
        		}).catch((error)=>{
        			return res.json({
	                status: 500,
	                success: false,
	                error: "User use code "+error
	              });
        		})
        	}
        ],async (transaction, promotional_code,company,subscription,code_used)=>{
        	try{
            await transaction
	          .commit();
	           return res.json({
	              status: 200,
	              data: "Successfully",
	              success: true,
	            });
	          }catch(error){
	            //await transaction.rollback();
	             return res.json({
	                status: 500,
	                success: false,
	                error: ""+err
	              });
          	}
        })
	}

}