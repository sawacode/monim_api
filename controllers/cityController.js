//Import
const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');

module.exports = {
	citiesByCountry: (req, res)=>{
		let countrie_id  = req.params.countrie_id;
		let _limit  = req.body.params.limit==null?null:parseInt(req.body.params.limit);

		iAsync.waterfall([
			(done)=>{
				model.cities.findAll(
				{
					limit: _limit,
					include: {
						model: model.countries,
						where: {id: countrie_id}
					}
				})
				.then((cities)=>{
					done(cities);
				})
				.catch((err)=>{
					return res.status(500).json({
						erro: ""+error
					})
				});
			}
		],(cities)=>{
			return res.status(200).json({
				length: cities.length,
				cities: cities
			})
		});
	}
}