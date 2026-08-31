//Import
const { Op } = require("sequelize");
const model = require('../models');
const config = require('../config/app');

module.exports = {
    getVersion: (req, res) => {
        model.app_versions.findOne()
            .then((_version) => {
                if (_version) {
                    return res.json({
                        status: 200,
                        version: _version
                    })
                } else {
                    return res.json({
                        status: 400,
                        error: "Not found version"
                    })
                }
            }).catch((_error) => {
                console.log("xxxxxxxxxxxxxxxxxxxx ", _version);
                return res.json({
                    status: 500,
                    error: "Not found version"
                })
            });
    }
}