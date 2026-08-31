const { Op } = require("sequelize");
const iAsync = require('async');
const model = require('../models');
const jwtUtils = require("../utils/jwt.utils");
const date = new Date();

module.exports = {
	all: (req, res)=>{
		let hearderAuth = req.headers["authorization"];
		let user = jwtUtils.getUser(hearderAuth);
		model.favorites.findAll({
			where: {user_id: user.userId},
			order: [["id", "DESC"]],
			include: [
			 {
			 	model: model.products,
			 	include: [
				 		{model: model.folders},
				 		{ model: model.product_identifies},
				 		 { 
                  model: model.likes,
                  required: false
                },
				 		{
	                  model: model.users,
	                  include: [
	                    {
	                      model: model.countries,
	                    },
	                  ],
	                  attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },

	                },
	                { model: model.countries },
	                { model: model.cities },
	                { model: model.municipalities },
	                { model: model.districts },
	                { model: model.categories },
	                { model: model.conditions },
	                { model: model.companies },
	                { model: model.types },
			 	],
			 },
			]
		}).then((_values)=>{
			//3console.log("xxxxxxxxxxxxxxxxxx",_values);
			return res.json({
				status: 200,
				favorites: _values
			});
		}).catch((error)=>{
			return res.json({
				staus: 500,
				error: ""+error
			});
		})
	},
	store: (req, res)=>{
		let product_id = req.params.realestate_id;
		let hearderAuth = req.headers["authorization"];
		let user = jwtUtils.getUser(hearderAuth);
		let transaction;
	iAsync.waterfall([
		(done)=>{
			 model.sequelize
            .transaction()
            .then((_transaction) => {
              transaction = _transaction;
              done(null, transaction);
            })
            .catch((err)=>{
              return res.json({
                status: 500,
                success: false,
                error: ""+err
              })
            });
		},(transaction,done)=>{
			//Ajouter un favoris
			model.favorites.findOrCreate({
			where: {user_id:user.userId, product_id: product_id },
			defaults: {
				created_at: date.getTime(),
				product_id: product_id,
				user_id: user.userId
			},
			transaction: transaction
		}).then(([value,created])=>{
			done(null,transaction, created);
		}).catch((error)=>{
			return res.json({
				status: 500,
				success: false,
				error: ""+error
			});
		});
		//supprimer  un favoris s'il existe déjà
		}, (transaction,created,done)=>{
			
			if(created == false){
				model.favorites.destroy({
					where: {user_id:user.userId, product_id: product_id },
				}).then((value)=>{

					done(null,transaction,created);
				}).catch((error)=>{
					return res.json({
						status: 500,
						success: false,
						error: ""+error
					});
				});
			}else{
				done(null,transaction,created);
			}
		},(transaction, created, done)=>{
			//Réccuperer tous les favoris
			model.favorites.findAll({
		    where: {user_id: user.userId},
			order: [["id", "DESC"]],
			include: [
			 {
			 	model: model.products,
			 	include: [
				 		{model: model.folders},
				 		
                 { 
                  model: model.likes,
                  required: false
                },
                { model: model.product_identifies},
				 		{
	                  model: model.users,
	                  include: [
	                    {
	                      model: model.countries,
	                    },
	                  ],
	                  attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
	                },
	                { model: model.countries },
	                { model: model.cities },
	                { model: model.municipalities },
	                { model: model.districts },
	                { model: model.categories },
	                { model: model.conditions },
	                { model: model.companies },
	                { model: model.types },
			 	],
			 },
			]
			}).then((_favorites)=>{
				//console.log("Favoris  xxxxxxxxxxxxxxxxxx",_favorites);
				done(transaction,created, _favorites);
			}).catch((error)=>{
					return res.json({
						status: 500,
						success: false,
						error: ""+error
					});
				});
		}
	],(transaction, created,_favorites)=>{
		
		transaction.commit()
		.then(()=>{
			return res.json({
				status: 200,
				success: true,
				data: _favorites
			})
		}).catch(async (error)=>{
			await transaction.rollback();
			return res.json({
						status: 500,
						success: false,
						error: ""+error
					});
		})
		
	});
		
	}
}