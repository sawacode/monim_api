const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');

module.exports = {
	all: (req, res)=>{
		const token = req.headers['authorization'];
        const user = jwtUtils.getUser(token);
        model.notifications.findAll({
        	where: {user_id: user.userId},
        	order: [["id", "DESC"]]
        }).then((notifications)=>{
        	return res.json({
        		status: 200,
        		notifications: notifications
        	});
        }).catch((error)=>{
        	return res.json({
        		status: 500,
        		error: ""+error
        	});
        })
	},
	markAsRead: (req, res)=>{
		const token = req.headers['authorization'];
        const user = jwtUtils.getUser(token);
        model.notifications.update({
        	not_status: 1,
        }, {where: {user_id: user.userId, not_status: 0}}
        ).then((_result)=>{
        	return res.json({
        		status: 200,
        		success: true,
        		data: "Ok"
        	})
        }).catch((error)=>{
        	return res.json({
        		status: 500,
        		success: false,
        		data: ""+error
        	})
        })
	}
}