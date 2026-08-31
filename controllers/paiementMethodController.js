const { Op, where } = require("sequelize");
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const uniqueId = require("../utils/uniqueId.utils");
const model = require("../models");
const iAsync = require("async");
const config = require("../config/app");

module.exports = {
	all: (req, res) =>{
		const country_id = req.params.country_id;
		model.paiement_operators.findAll({
			where: {countrie_id: country_id, status: 1},
			include: [
				{model: model.countries}
			]
		}).then((methods)=>{
			return res.json({
				status: 200,
				success: false,
				methods: methods
			})
		}).catch((error)=>{
			return res.json({
				status: 500,
				success: false,
				error: ""+error
			})
		})
	}
}