const model = require('../../models');
const { Op } = require("sequelize");
const jwtUtils = require('../../utils/jwt.utils');

module.exports = (req, res, next) =>{
        const identify = req.headers["identify"];
        const email = req.headers["email"];
        
        if (identify==null || email==null) return res.json({ success: false, status: 444, error: 'wrong identify '});
        
        model.admins.findOne({
            where: { identifier: identify, email:email  }
        }).then((admin) => {
            if (admin) {
                if (admin.adm_enable == false) {
                    return res.json({
                        status: 411,
                        success: false,
                        error: "User is disabled"
                    })
                }
                next();
            } else {
                return res.json({
                    status: 444,
                    success: false,
                    error: 'user not found' 
                });
            }
        }).catch((err) => {
            return res.json({
                status: 500,
                success: false,
                error: ''+err
            });
        })
} 