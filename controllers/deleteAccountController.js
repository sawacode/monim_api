
const jwtUtils = require("../utils/jwt.utils");
const model = require("../models");
const iAsync = require("async");
module.exports = {
    getAsk: (req, res) => {
        let hearderAuth = req.headers["authorization"];
        let user = jwtUtils.getUser(hearderAuth);

        model.delete_accounts.findOne({
            where: {user_id: user.userId}
        }).then((ask) => {
            if (ask) {
                return res.json({
                    status: 200,
                    data: ask
                })
            } else {
                return res.json({
                    status: 404,
                    error: "Demande non trouvé"
                })
            }

        }).catch((error) => {
            return res.json({
                status: 500,
                error: error.message,
            });
        })
    },

    create: async (req, res) => {
        try {
            let hearderAuth = req.headers["authorization"];
            let user = jwtUtils.getUser(hearderAuth);
            const date = new Date();
            iAsync.waterfall([
                (done) => {
                    //Vérification si demande déjà envoyé
                    model.delete_accounts.findOne({
                        where: {user_id: user.userId}
                    }).then((_ask) => {
                       
                        
                        done(null ,_ask);

                    }).catch((error) => {
                        return {
                            status: 500,
                            error: "" + error
                        }
                    });

                }, (_ask, done) => {
                     console.log(_ask);
                    if (_ask) {
                        return res.json({
                            status: 409,
                            error: "Demande déjà envoyé"
                        })
                    } else {
                        model.delete_accounts.create({
                            user_id: user.userId,
                            created_at: date.getTime(),
                            updated_at: date.getTime(),

                        }).then((_ask) => {

                            done(_ask)

                        }).catch((error) => {
                            return res.json({
                                status: 500,
                                error: "" + error,
                            });
                        })
                    }

                }
            ], (_ask) => {
                return res.json({
                    status: 200,
                    data: _ask
                })
            })

        } catch (error) {
            return res.json({
                status: 500,
                error: error.message,
            });
        }

    }
}