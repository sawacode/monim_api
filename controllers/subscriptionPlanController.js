const { Op, Sequelize, where } = require("sequelize");
const iAsync = require("async");
const jwtUtils = require("../utils/jwt.utils");
const helper = require("../utils/helper.utils");
const model = require("../models");
const config = require("../config/app");
const PaymentRequestEmail = require("../mail/payment_request");
const NotifyAdminEmail = require("../mail/notify_admin");


const date = new Date();

module.exports = {
	all: (req, res) => {
		const country_id = req.params.country_id;
		model.pack_subscriptions.findAll({
			where: { countrie_id: country_id, pack_status: 1, pack_slug: { [Op.ne]: "pack_vlsgratuit" } },
			include: [{ model: model.countries }]
		})
			.then((_packs) => {
				return res.json({
					status: 200,
					length: _packs.length,
					packs: _packs
				});
			})
			.catch((error) => {
				return res.json({
					status: 500,
					error: "" + error
				});
			})
	},

	show: (req, res) => {
		const pack_id = req.params.pack_id;
		model.pack_subscriptions.findOne(
			{
				where: [{ id: pack_id }],
				include: [
					{
						model: model.countries,
						include: [{ model: model.paiement_operators, where: { status: 1 } }]
					},

				]
			})
			.then((_pack) => {
				return res.json({
					status: 200,
					pack: _pack
				});
			})
			.catch((error) => {
				res.json({
					status: 500,
					error: "" + error
				});
			})
	},
	sendRequest: (req, res) => {
		const payer_number = req.body.payer;
		//const receive_number = req.body.receiver;
		const operator = req.body.operator;
		const pack_id = req.body.pack_id;
		const request_file = req.file;

		const hearderAuth = req.headers["authorization"];
		const user = jwtUtils.getUser(hearderAuth);
		

		let transaction;

		iAsync.waterfall([
			(done) => {
				model.sequelize.transaction().then((_transaction) => {
					transaction = _transaction;
					done(null, transaction);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						data: "" + err
					})
				});
			}, (transaction, done) => {
				model.users
					.findOne(
						{
							attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
							where: { id: user.userId, phone: user.userPhone },
						},
						{ transaction }
					)
					.then((_user) => {
						done(null, transaction, _user);
					})
					.catch((err) => {

						return res.json({
							status: 500,
							success: false,
							data: "Internal Server Error " + err,
						});
						//done(err, transaction);
					});
			}, (transaction, _user, done) => {
				if (_user) {
					model.companies.findOne({
						where: { user_id: _user.id }
					}).then((_company) => {
						done(null, transaction, _user, _company);
					}).catch((err) => {
						return res.json({
							status: 500,
							data: "Internal Server Error " + err,
							success: false
						});
					})
				} else {
					return res.status(200).json({
						status: 444,
						success: false,
						data: 'user not found'
					});
				}

			}, (transaction, _user, _company, done) => {
				model.pack_subscriptions.findOne({
					where: { id: pack_id },
					
				}, { transaction }).then((_pack) => {
					done(null, transaction, _user, _company, _pack);
				}).catch((error) => {
					return res.json({
						status: 500,
						success: false,
						data: "" + error
					});
				});
			}, (transaction, _user, _company, _pack, done) => {
				
				if (request_file != null && request_file.fieldname == "image_request") {

					if (_company && _pack) {
						model.payment_requests.create({
							payer_number: payer_number,
							image_request: request_file.path,
							pack: _pack.pack_libele,
							pack_id: _pack.id,
							amount: _pack.pack_price,
							value_to_add: _pack.number_of_properties,
							currency: _pack.pack_devis,
							status: 0,
							icon: _pack.image,
							operator: operator,
							user_id: _user.id,
							company_id: _company.id,
							created_at: date.getTime(),
							countries_id : _pack.countrie_id
						}, { transaction })
							.then((_payment) => {
								done(null, transaction, _user, _company, _pack, _payment);
							}).catch((err) => {
								return res.json({
									status: 500,
									data: "" + err,
									success: false
								});
							});
					} else {
						return res.json({
							status: 404,
							success: false,
							data: 'Ressource not found'
						});
					}
				} else {
					return res.json({
						status: 405,
						success: false,
						data: 'file not found'
					});
				}

			}, (transaction, _user, _company, _pack, _payment, done) => {
				if (_payment) {
					model.notifications.create({
						not_content: "Votre demande de paiement du pack " + _pack.pack_libele + " a été enregistré avec succès. Veuillez patientez un moment pour une vérification. Merci d'avoir choisir notre service",
						not_status: 0,
						user_id: _user.id,
						created_at: date.getTime()
					}).then((_) => {
						done(transaction, _user, _company, _pack, _payment);
					}).catch((err) => {
						return res.json({
							status: 500,
							data: "" + err,
							success: false
						});
					});

				} else {
					return res.status(200).json({
						status: 404,
						success: false,
						data: 'payment not found'
					});
				}
			}

		], (transaction, _user, _company, _pack, _payment) => {
			transaction
				.commit()
				.then(() => {
					PaymentRequestEmail.payment_request_confirmation(_user.email, {
						pack: _pack.pack_libele
					});
					NotifyAdminEmail.sendMail("notify_admin_payment_request.ejs","Demande de paiement de pack", config.admin_mail, {
						identify: _company.identifier,
						pack: _pack.pack_libele,
						amount: _pack.pack_price,
						currency: _pack.pack_devis
					});
					return res.json({
						status: 200,
						data: "created successfully",
						success: true,
					});
				})
				.catch(async (commitErr) => {
					await transaction.rollback();
					//console.error("Commit erroraaaaaaaaaaa:", commitErr);
					return res.json({
						status: 500,
						data: "Internal Server Error " + commitErr,
						success: false
					});
				});
		});
	},

	validatePaymentPlan: (req, res) => {
		const payment_id = req.params.payment_request_id;
		const admin_identify = req.body.identify;
		let transaction;

		iAsync.waterfall([
			(done) => {
				model.sequelize.transaction().then((_transaction) => {
					transaction = _transaction;
					done(null, transaction);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "0 " + err
					})
				});
			}, (transaction, done) => {
				//Vérification de l'administrateur
				model.admins.findOne({
					where: { identify: admin_identify, role: "admin_s", adm_enable: 1 }
				}, { transaction }).then((admin) => {
					done(null, transaction, admin);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "1 " + err
					})
				});
			}, (transaction, admin, done) => {
				if (admin) {
					//Vérification de la demande
					model.payment_requests.findOne({
						where: { id: payment_id , status: 0},
						include: [
							{
								model: model.users,
								attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
							}
						]
					}, { transaction }).then((payment) => {
						done(null, transaction, admin, payment);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "2 " + error
							})
						});
				} else {
					return res.json({
						status: 403,
						success: false,
						error: "Permission problem"
					})
				}
			}, (transaction, admin, payment, done) => {
				if (payment) {
					//Vérifier si déjà validé
					model.validate_payments.findOne({
						where: { payment_request_id: payment.id, company_id: payment.company_id }
					}, { transaction }).then((validate_p) => {
						done(null, transaction, admin, payment, validate_p);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "3 " + error
							})
						});
				} else {
					return res.json({
						status: 404,
						success: false,
						error: "Not found payment"
					})
				}
			}, (transaction, admin, payment, validate_p, done) => {
				if (validate_p) {
					//Validate bloqué
					return res.json({
						status: 406,
						success: false,
						data: "No permisson"
					});
				} else {
					//Réccupération de la souscription de l'agent
					model.subscriptions.findOne({
						where: { companie_id: payment.company_id }
					}, { transaction })
						.then((subscription) => {
							done(null, transaction, admin, payment, validate_p, subscription);
						})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "4 " + error
							})
						});
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				if (subscription) {
					//Mise a jour du compt
					try {
						subscription.s_number_of_properties += payment.value_to_add;
						subscription.save({ transaction: transaction });
						done(null, transaction, admin, payment, validate_p, subscription);
					} catch (error) {
						return res.json({
							status: 500,
							success: false,
							error: "5 " + error
						});
					}
				} else {
					return res.json({
						status: 404,
						success: false,
						error: "Not found subscription"
					})
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				try {
					payment.status = 1;
					payment.updated_at = date.getTime();
					payment.save({ transaction: transaction });
					done(null, transaction, admin, payment, validate_p, subscription);
				} catch (error) {
					return res.json({
						status: 500,
						success: false,
						error: "6 " + error
					});
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				model.validate_payments.create({
					status: 1,
					company_id: payment.company_id,
					admin_id: admin.id,
					payment_request_id: payment.id,
					created_at: date.getTime()
				},{transaction}).then((validate_p_create) => {
					done(null, transaction, admin, payment, validate_p, subscription, validate_p_create);
				})
					.catch((error) => {
						return res.json({
							status: 500,
							success: false,
							error: "7 " + error
						})
					});
			}, (transaction, admin, payment, validate_p, subscription,validate_p_create,done) => {
				model.pack_subscription_histories.create({
					price: payment.amount + " " + payment.currency,
					start: payment.created_at,
					wording: payment.pack,
					icon: "",
					deadline: payment.value_to_add,
					status: 1,
					type: "number",
					created_at: date.getTime(),
					subscription_id: subscription.id,
					companie_id: payment.company_id,
					pack_subscriptions_id: payment.pack_id,
					user_id: payment.user_id

				}, { transaction }).then((_) => {

					done(null,transaction, admin, payment, validate_p, subscription,validate_p_create);

				}).catch((error) => {

					return res.json({
						status: 500,
						error: "8 " + error
					});

				});
			},
			(transaction, admin, payment, validate_p, subscription,validate_p_create, done) => {
				model.notifications.create({
					not_content: "Votre achat du pack " + payment.pack + "a été validé. Vous bénéficiez de " + payment.value_to_add + " point(s).",
					not_status: 0,
					user_id: payment.user_id,
					created_at: date.getTime()
				}).then((_) => {
					done(transaction, admin, payment, validate_p, subscription, validate_p_create);
				}).catch((err) => {
					return res.json({
						status: 500,
						error: "9 " + err,
						success: false
					});
				});
			}
		], (transaction, admin, payment, validate_p, subscription) => {
			transaction
				.commit()
				.then(() => {
					PaymentRequestEmail.validationPaymentRequest(payment.user.email, {
						pack: payment.pack
					});
					return res.json({
						status: 200,
						data: "validated successfully",
						success: true,
					});
				})
				.catch(async (commitErr) => {
					await transaction.rollback();
					return res.json({
						status: 500,
						error: "Internal Server Error " + commitErr,
						success: false
					});
				});
		})
	},

	cancelTheTransaction: (req, res) => {
		const payment_id = req.params.payment_request_id;
		const admin_identify = req.body.identify;
		let transaction;

		iAsync.waterfall([
			(done) => {
				model.sequelize.transaction().then((_transaction) => {
					transaction = _transaction;
					done(null, transaction);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "0 " + err
					})
				});
			}, (transaction, done) => {
				//Vérification de l'administrateur
				model.admins.findOne({
					where: { identify: admin_identify, role: "admin_s", adm_enable: 1 }
				}, { transaction }).then((admin) => {
					done(null, transaction, admin);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "1 " + err
					})
				});
			}, (transaction, admin, done) => {
				if (admin) {
					//Vérification de la demande
					model.payment_requests.findOne({
						where: { id: payment_id},
						include: [
							{
								model: model.users,
								attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
							}
						]
					}, { transaction }).then((payment) => {
						done(null, transaction, admin, payment);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "2 " + error
							})
						});
				} else {
					return res.json({
						status: 403,
						success: false,
						error: "Permission problem"
					})
				}
			}, (transaction, admin, payment, done) => {
				if (payment) {
					//Vérifier si déjà validé
					model.validate_payments.findOne({
						where: { payment_request_id: payment.id, company_id: payment.company_id }
					}, { transaction }).then((validate_p) => {
						done(null, transaction, admin, payment, validate_p);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "3 " + error
							})
						});
				} else {
					return res.json({
						status: 404,
						success: false,
						error: "Not found payment"
					})
				}
			}, (transaction, admin, payment, validate_p, done) => {
				if (!validate_p) {
					//Validate bloqué
					return res.json({
						status: 406,
						success: false,
						data: "No found"
					});
				} else {
					//Réccupération de la souscription de l'agent
					model.subscriptions.findOne({
						where: { companie_id: payment.company_id }
					}, { transaction })
						.then((subscription) => {
							done(null, transaction, admin, payment, validate_p, subscription);
						})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "4 " + error
							})
						});
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				if (subscription) {
					//Mise a jour du compt
					try {
						//Si la validation éffectuée est égale à 1 alors on retire des points du compte
						if(validate_p == 1){
							subscription.s_number_of_properties -= payment.value_to_add;
							subscription.save({ transaction: transaction });
						}
						done(null, transaction, admin, payment, validate_p, subscription);
					} catch (error) {
						return res.json({
							status: 500,
							success: false,
							error: "5 " + error
						});
					}
				} else {
					return res.json({
						status: 404,
						success: false,
						error: "Not found subscription"
					})
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				try {
					payment.status = 0;
					payment.updated_at = date.getTime();
					payment.save({ transaction: transaction });
					done(null, transaction, admin, payment, validate_p, subscription);
				} catch (error) {
					return res.json({
						status: 500,
						success: false,
						error: "6 " + error
					});
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				model.validate_payments.create({
					status: 0,
					company_id: payment.company_id,
					admin_id: admin.id,
					payment_request_id: payment.id,
					created_at: date.getTime()
				},{transaction}).then((validate_p_create) => {
					done(null, transaction, admin, payment, validate_p, subscription, validate_p_create);
				})
					.catch((error) => {
						return res.json({
							status: 500,
							success: false,
							error: "7 " + error
						})
					});
			}, (transaction, admin, payment, validate_p, subscription,validate_p_create,done) => {
				
				model.pack_subscription_histories.create({
					price: "",
					start: payment.created_at,
					wording: payment.pack,
					icon: null,
					deadline: payment.value_to_add,
					status: 0,
					type: "number",
					created_at: date.getTime(),
					subscription_id: subscription.id,
					companie_id: payment.company_id,
					pack_subscriptions_id: payment.pack_id,
					user_id: payment.user_id

				}, { transaction }).then((_) => {

					done(null,transaction, admin, payment, validate_p, subscription,validate_p_create);

				}).catch((error) => {

					return res.json({
						status: 500,
						error: "8 " + error
					});

				});
			},
			(transaction, admin, payment, validate_p, subscription,validate_p_create, done) => {
				model.notifications.create({
					not_content: "Suite à une erreur de traitement, nous vous avons retiré -" + payment.value_to_add + " point(s).",
					not_status: 0,
					user_id: payment.user_id,
					created_at: date.getTime()
				}).then((_) => {
					done(transaction, admin, payment, validate_p, subscription, validate_p_create);
				}).catch((err) => {
					return res.json({
						status: 500,
						error: "9 " + err,
						success: false
					});
				});
			}
		], (transaction, admin, payment, validate_p, subscription) => {
			transaction
				.commit()
				.then(() => {
					/* PaymentRequestEmail.validationPaymentRequest(payment.user.email, {
						pack: payment.pack
					}); */
					return res.json({
						status: 200,
						data: "validated successfully",
						success: true,
					});
				})
				.catch(async (commitErr) => {
					await transaction.rollback();
					return res.json({
						status: 500,
						error: "Internal Server Error " + commitErr,
						success: false
					});
				});
		})
	},

	refusePaymentTransaction: (req, res) => {
		const payment_id = req.params.payment_request_id;
		const admin_identify = req.body.identify;
		const motif = req.body.motif;
		if(!motif) return res.json({ success: false, status: 404, error: 'wrong motif '})
		let transaction;

		iAsync.waterfall([
			(done) => {
				model.sequelize.transaction().then((_transaction) => {
					transaction = _transaction;
					done(null, transaction);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "0 " + err
					})
				});
			}, (transaction, done) => {
				//Vérification de l'administrateur
				model.admins.findOne({
					where: { identify: admin_identify, role: "admin_s", adm_enable: 1 }
				}, { transaction }).then((admin) => {
					done(null, transaction, admin);
				}).catch((err) => {
					return res.json({
						status: 500,
						success: false,
						error: "1 " + err
					})
				});
			}, (transaction, admin, done) => {
				if (admin) {
					//Vérification de la demande
					model.payment_requests.findOne({
						where: { id: payment_id},
						include: [
							{
								model: model.users,
								attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
							}
						]
					}, { transaction }).then((payment) => {
						done(null, transaction, admin, payment);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "2 " + error
							})
						});
				} else {
					return res.json({
						status: 403,
						success: false,
						error: "Permission problem"
					})
				}
			}, (transaction, admin, payment, done) => {
				if (payment) {
					//Vérifier si déjà validé
					model.validate_payments.findOne({
						where: { payment_request_id: payment.id, company_id: payment.company_id }
					}, { transaction }).then((validate_p) => {
						done(null, transaction, admin, payment, validate_p);
					})
						.catch((error) => {
							return res.json({
								status: 500,
								success: false,
								error: "3 " + error
							})
						});
				} else {
					return res.json({
						status: 404,
						success: false,
						error: "Not found payment"
					})
				}
			}, (transaction, admin, payment, validate_p, done) => {
				if (validate_p) {
					return res.json({
						status: 403,
						success: false,
						error: "Already validate"
					});
				} else {
					done(null, transaction, admin, payment);
				}
			},(transaction, admin, payment, validate_p, subscription, done) => {
				try {
					payment.status = 2;
					payment.updated_at = date.getTime();
					payment.motif = motif;
					payment.save({ transaction: transaction });
					done(null, transaction, admin, payment,);
				} catch (error) {
					return res.json({
						status: 500,
						success: false,
						error: "6 " + error
					});
				}
			}, (transaction, admin, payment, validate_p, subscription, done) => {
				model.validate_payments.create({
					status: 2,
					company_id: payment.company_id,
					admin_id: admin.id,
					payment_request_id: payment.id,
					created_at: date.getTime()
				},{transaction}).then((validate_p_create) => {
					done(null, transaction, admin, payment, validate_p, subscription, validate_p_create);
				})
					.catch((error) => {
						return res.json({
							status: 500,
							success: false,
							error: "7 " + error
						})
					});
			}, 
			(transaction, admin, payment, validate_p, subscription,validate_p_create, done) => {
				model.notifications.create({
					not_content: "Votre paiement du " + payment.pack + " a été refusée après une vérification.\nMotif: "+motif,
					not_status: 0,
					user_id: payment.user_id,
					created_at: date.getTime()
				}).then((_) => {
					done(transaction, admin, payment, validate_p, subscription, validate_p_create);
				}).catch((err) => {
					return res.json({
						status: 500,
						error: "9 " + err,
						success: false
					});
				});
			}
		], (transaction, admin, payment, validate_p, subscription) => {
			transaction
				.commit()
				.then(() => {
					/* PaymentRequestEmail.validationPaymentRequest(payment.user.email, {
						pack: payment.pack
					}); */
					return res.json({
						status: 200,
						data: "validated successfully",
						success: true,
					});
				})
				.catch(async (commitErr) => {
					await transaction.rollback();
					return res.json({
						status: 500,
						error: "Internal Server Error " + commitErr,
						success: false
					});
				});
		})
	},
	

}