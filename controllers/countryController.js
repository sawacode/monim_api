//Import
const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');

module.exports = {
	all: (req, res)=>{
		model.countries.findAll()
		.then((_countries)=>{
			return res.json({
				status: 200,
				length: _countries.length,
				countries: _countries
			})
		})
		.catch((err)=>{
			return res.json({
				status: 500,
				length: 0,
				error: ""+error
			});
		})
	},
	defaultSelect: (req, res)=>{
		try{
			model.countries.findOne({
				where: {countries_code: "225"}
			}).then((_country)=>{
				return res.json({
					status: 200,
					success: true,
					country: _country
				})
			}).catch((err)=>{
				return res.json({
					status: 500,
					error: ""+err
				});
			})
		}catch(error){
			return res.json({
					status: 500,
					error: ""+error
				});
		}
	}
}