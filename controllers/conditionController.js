//Import
const { Op } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');


module.exports = {
	all: (req, res)=>{

        let _limit = req.params.count==null?null:parseInt(req.params.count);

        iAsync.waterfall([
            (done)=>{
                model.conditions.findAll({
                    order: [["id", "DESC"]],
                })
                .then((_condition)=>{
                    done(_condition);
                }).catch((err)=>{
                    return res.status(500).json({
                      status: 500,
                      error: ""+err
                    });
                })
            }],(_condition)=>{
           
                return res.status(200).json({
                    status: 200,
                    length: _condition.length,
                    conditions: _condition
                })
        
                
        })
	},
	allTheirProduct: (req, res)=>{
		let _limit = req.params.count==null?null:parseInt(req.params.count);

        iAsync.waterfall([
            (done)=>{
                model.conditions.findAll({
                	include:  [
                	 {
                	    model: model.products,
                	    limit: _limit,
                	    where: {pro_inline: 1},
                	    order: [["id", "DESC"]],
                	    include: [
                	        {
                                model: model.folders,
                                limit: 6
                            },
                	        {model: model.users},
                	               
                	    ]
                	  }
                	]
                })
                .then((_condition)=>{
                    done(_condition);
                }).catch((err)=>{
                    return res.status(500).json({
                      status: 500,
                      error: ""+err
                    });
                })
            }],(_condition)=>{
           
                return res.status(200).json({
                    status: 200,
                    length: _condition.length,
                    conditions: _condition
                })
        
                
        })
	},

	allByConditionSlogOrId: (req, res) => {

        let _limit = req.params.count==null?null:parseInt(req.params.count);
        let _condition = req.params.condition_slog;
        iAsync.waterfall([
            (done)=>{
                model.conditions.findAll({
                    where: {
                      [Op.or]: [{id: _condition}, {conditions_slog: _condition}]
                    },
                	include:  
                	 { 
                	    model: model.products,
                	    where: {pro_inline: 1},
                	    order: [["id", "DESC"]],
                	    limit: _limit,
                	    include: [
                	        {model: model.users},
                	        {model: model.folders,
								limit: 6
                	         }
                	               
                	    ]
                	  }
                	
                    
                }).then((_condition)=>{
                    done(_condition);
                }).catch((err)=>{
                    return res.status(500).json({
                      status: 500,
                      error: ""+err
                    });
                })
            }],(_condition)=>{
           
                return res.status(200).json({
                    status: 200,
                    length: _condition.length,
                    conditions: _condition
                })
        
                
        })
    },
}