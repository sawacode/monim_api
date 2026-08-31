const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');

//Export function
module.exports = {
	productEditableLenght: ()=>{
		return 1;
	},
	//Recherche des biens relatifs aux demandes de bien
	foundPropertiesSearchByUser: (userId)=>{
		iAsync.waterfall([
			model.proper
		])
	}
}