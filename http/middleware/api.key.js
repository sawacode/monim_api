const model = require('../../models');
const { Op } = require("sequelize");

module.exports = (req, res, next) => {
    const key = req.headers["key"] ?? null;
    model.configurations.findOne({
        where: {
            [Op.and]: [{ option: "api_key", value: key }]
        }
    }).then((_result) => {
        if (_result) {
            next();
        } else {

            return res.json({
                status: 333,
                success: false,
                error: "wrong api key"
            });
        }

    }).catch((err) => {
        //console.log("Api key errur xxxxxxxxxxxxxx wrong $",err);
        return res.json({
            status: 333,
            success: false,
            error: 'Can not verify api key . Error:' + err
        });
    });

} 