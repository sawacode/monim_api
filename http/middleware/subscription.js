const model = require('../../models');
const { Op } = require("sequelize");
const jwtUtils = require('../../utils/jwt.utils');
const iAsync = require('async');

module.exports = {
	expired : (req, res, next)=>{
			let headerAuth = req.headers['authorization'];
        	//Id de l'utilisateur
	        var user = jwtUtils.getUser(headerAuth);
	        if (user == null) return res.json({ success: false, status: 444, error: 'wrong token ' + userId });

	     	iAsync.waterfall([

	        (done)=>{
	          model.companies.findOne({
	              where:{user_id: user.userId}
	            }).then((_company)=>{
	                done(null, _company);
	            }).catch((err)=>{
	            return res.json({
	                status: 500,
	                success: false,
	                error: ''+err
            });
	            });
	        },(_company, done)=>{
	          if(_company){
	            model.subscriptions.findOne({
	            	where: {companie_id: _company.id}
	            }).then((_subscription)=>{
	            	done(_company, _subscription);
	            }).catch((err)=>{
	              return res.json({
	                status: 500,
	                success: false,
	                error: ''+err
            		});
	            })
	          }else{
	            return res.json({
	                    status: 444,
	                    success: false,
	                    error: 'Company not found' 
	              });
	          }
	        }

      	],(_company, _subscription)=>{
	     	if (_subscription.s_number_of_properties > 0) {
	     		next();
	     	}else{
	     		return res.json({
	     			status: 603,
	                success: false,
	                error: 'Expired subscription'
	     		})
	     	}
	    });
	}
}