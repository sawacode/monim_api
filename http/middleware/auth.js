const model = require('../../models');
const { Op } = require("sequelize");
const jwtUtils = require('../../utils/jwt.utils');

module.exports = (req, res, next) =>{
        let headerAuth = req.headers['authorization'];
        //Id de l'utilisateur
        var user = jwtUtils.getUser(headerAuth);
        if (user == null) return res.json({ success: false, status: 444, error: 'wrong token '});
        
        model.users.findOne({
            where: { id: user.userId, phone: user.userPhone  }
        }).then((user) => {
            if (user) {
                
                if (user.user_enable == false) {
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