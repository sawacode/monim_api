const { Op, where } = require("sequelize");
const iAsync = require('async');
const jwtUtils = require('../utils/jwt.utils');
const model = require('../models');
const config = require('../config/app');
const NotifyAgent = require("../mail/notify_agent");
const date = new Date();


module.exports = {
    all: (req, res) => {

        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);

        model.property_searchs.findAll({
            where: { user_id: user.userId },
            order: [["id", "DESC"]],
            include: [
                {
                    model: model.countries,
                    include: [{
                        model: model.cities,
                        include: [{ model: model.municipalities }]
                    }]

                },
                { model: model.cities },
                { model: model.municipalities },
                { model: model.categories },
                { model: model.conditions },
                { model: model.types },
            ],
        }).then((searchs) => {
            return res.json({
                status: 200,
                success: true,
                searchs: searchs
            })
        }).catch((error) => {
            return res.json({
                status: 500,
                success: false,
                error: "" + error
            })
        })
    },

    putOffOrOn: (req, res) => {
        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
        const searchId = req.params.id;

        model.property_searchs.findOne({
            where: { user_id: user.userId, id: searchId }
        }).then((search) => {
            if (search) {
                try {
                    search.status = !search.status;
                    search.save();
                    res.json({
                        status: 200,
                        success: true,
                        data: "Successfully"
                    })
                } catch (error) {
                    res.json({
                        status: 500,
                        error: '' + error
                    });
                }
            } else {
                res.json({
                    status: 404,
                    error: "search not found"
                })
            }
        }).catch((error) => {
            res.json({
                status: 500,
                error: '' + error
            })
        });
    },

    store: (req, res) => {

        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
        const wording = req.body.wording;
        const country_id = req.body.country_id;
        const city_id = req.body.city_id;
        const condition_id = req.body.condition_id;
        const categorie_id = req.body.categorie_id;
        const type_id = req.body.type_id;
        const municipalitie_id = req.body.municipalitie_id;
        const budget = req.body.budget;
        const status = req.body.status;
        const currency = req.body.currency;

        if (wording == null || country_id == null, condition_id == null || type_id == null) {
            return res.json({
                status: 400,
                error: "Missing parameters"
            })
        }

        iAsync.waterfall([
            (done) => {
                model.users.findOne(
                    {
                        attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                        where: { id: user.userId, phone: user.userPhone },
                    }
                )
                    .then((_user) => {
                        done(null, _user);
                    })
                    .catch((err) => {
                        return res.json({
                            status: 500,
                            error: "Internal Server Error " + err,
                        });
                        //done(err, transaction);
                    });
            }, (_user, done) => {
                if (_user) {
                    model.property_searchs.findOrCreate({
                        where: { user_id: _user.id, countrie_id: country_id, citie_id: city_id, municipalitie_id: municipalitie_id, type_id: type_id, condition_id: condition_id, categorie_id: categorie_id },
                        defaults: {
                            wording: wording,
                            countrie_id: country_id,
                            citie_id: city_id,
                            type_id: type_id,
                            categorie_id: categorie_id,
                            condition_id: condition_id,
                            user_id: _user.id,
                            budget: budget,
                            municipalitie_id: municipalitie_id,
                            status: status,
                            created_at: date.getTime(),
                            currency: currency
                        }
                    }).then(([search, created]) => {
                        if (created) {
                            model.property_searchs.findOne({
                                where: { id: search.id },
                                include: [
                                    { model: model.countries },
                                    { model: model.cities },
                                    { model: model.municipalities },
                                    { model: model.categories },
                                    { model: model.conditions },
                                    { model: model.types },
                                ],
                            }).then((_search) => {
                                done(null, _user, _search);
                            }).catch((err) => {
                                return res.json({
                                    status: 500,
                                    error: "" + err,
                                });
                            })

                        } else {
                            return res.json({
                                status: 409,
                                error: "this search is already defined"
                            })
                        }
                    }).catch((err) => {

                        return res.json({
                            status: 500,
                            error: "Can not verify " + err,
                        });
                    });
                } else {
                    return res.json({
                        status: 404,
                        error: "user not found"
                    })
                }
            }, (_user, _search, done) => {
                model.companies.findAll({
                    where: { countrie_id: _search.countrie_id },
                    include: [{
                        model: model.users,
                        where: {
                            id: { [Op.ne]: _user.id }
                        }
                    }]
                }).then((_company) => {
                    done(_user, _search, _company);
                }).catch((err) => {
                    return res.json({
                        status: 500,
                        error: "SSSSS" + err,
                    });
                });
            }
        ], async (_user, _search, _company) => {

            if (_search) {
                const mails = _company.map((company) => {
                    NotifyAgent.userSearchRealestate(company.user.email, {
                        type: _search.type.type_name
                    });
                });

                await Promise.all(mails);

                return res.json({
                    status: 200,
                    success: true,
                    search: _search
                })
            } else {
                return res.json({
                    status: 400,
                    success: false,
                    search: "error"
                })
            }

        })

    },

    update: (req, res) => {
        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
        const wording = req.body.wording;
        const country_id = req.body.country_id;
        const city_id = req.body.city_id;
        const condition_id = req.body.condition_id;
        const categorie_id = req.body.categorie_id;
        const type_id = req.body.type_id;
        const municipalitie_id = req.body.municipalitie_id;
        const budget = req.body.budget;
        const status = req.body.status;
        const searchId = req.params.id;
        const currency = req.body.currency;

        model.property_searchs.findOne({
            where: { id: searchId, user_id: user.userId }
        }).then((_search) => {
            if (_search) {

                try {
                    _search.wording = wording;
                    _search.countrie_id = country_id;
                    _search.citie_id = city_id;
                    _search.type_id = type_id;
                    _search.categorie_id = categorie_id;
                    _search.condition_id = condition_id;
                    _search.budget = budget;
                    _search.currency = currency;
                    _search.municipalitie_id = municipalitie_id;
                    _search.status = status;
                    _search.updated_at = date.getTime();
                    _search.save().then((va) => {
                        return res.json({
                            status: 200,
                            success: true,
                            search: _search
                        })
                    });

                } catch (err) {
                    return res.json({
                        staus: 500,
                        error: "" + err
                    });
                }

            } else {
                return res.json({
                    status: 404,
                    error: "Not found"
                })
            }
        }).catch((err) => {
            return res.json({
                staus: 500,
                error: "" + err
            });
        });
    },

    delete: (req, res) => {
        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
        const searchId = req.params.id;

        model.property_searchs.destroy({
            where: { id: searchId, user_id: user.userId }
        }).then((value) => {
            return res.json({
                status: 200,
                success: true,
                data: "Deleted Successfully"
            })
        }).catch((error) => {
            return res.json({
                status: 500,
                success: false,
                error: "" + error
            })
        })

    },
    //Recherche des biens relatifs aux demandes de bien
    foundPropertiesSearchByUser: (req, res) => {
        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);
        const _limit = parseInt(req.params.limit) || 10;
        let nextCursor = req.query.cursor || null;


       /*  let option_where = {
            countrie_id: _search.countrie_id,
            citie_id: _search.citie_id,
            type_id: _search.type_id,
            condition_id: _search.condition_id, categorie_id: _search.categorie_id,
            pro_inline: 1,
            pro_enable: 1
        } */

        let resultPropertitiesSearchs = {
            suggestions: [],
            property_searchs: [],
            all: []
        };

        if (nextCursor && _limit) {
            const [cursorCreatedAt, cursorId] = nextCursor.split('_');

            option_where = {
                ...option_where, ...{
                    [Op.or]: [
                        {
                            created_at: { [Op.lt]: new Date(parseInt(cursorCreatedAt)) }
                        },
                        {
                            created_at: new Date(parseInt(cursorCreatedAt)),
                            id: { [Op.lt]: parseInt(cursorId) }
                        }
                    ]
                }
            }
        }

        iAsync.waterfall([
            (done) => {

                var allProductsFounded = new Set([]);

                model.property_searchs.findAll({
                    where: { user_id: user.userId, status: 1 }
                }).then((_searchs) => {
                    done(null, allProductsFounded, _searchs);
                }).catch((error) => {
                    return res.json({
                        status: 500,
                        success: false,
                        error: "" + error
                    });
                })
            }, (allProductsFounded, _searchs, done) => {
                if (_searchs.length > 0) {
                    _searchs.map((_search, index) => {
                        model.products.findAll({
                            limit: _limit,
                            where: option_where,
                            include: [
                                { model: model.folders, required: true },
                                {
                                    model: model.users,
                                    include: [
                                        {
                                            model: model.countries,
                                        },
                                    ],
                                    attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                                },
                                { model: model.countries },
                                { model: model.cities },
                                { model: model.municipalities },
                                { model: model.product_identifies },
                                { model: model.companies },
                                { model: model.categories },
                                { model: model.types },
                                { model: model.districts },
                                {
                                    model: model.likes,
                                    required: false
                                },
                                {
                                    model: model.conditions,
                                },
                            ],
                        }).then((_products) => {
                            _products.map((_prod) => {
                                //Vérifier si  le produit existe dans allProductsFounded
                                let exists = allProductsFounded.has(JSON.stringify(_prod));
                                if (!exists) {
                                    allProductsFounded.add(JSON.stringify(_prod));
                                }
                            });
                            if (index == _searchs.length - 1) {
                                done(allProductsFounded, _searchs);
                            }
                        }).catch((error) => {
                            return res.json({
                                status: 500,
                                success: false,
                                error: "" + error
                            })
                        })
                    });
                } else {
                    done(allProductsFounded, _searchs);
                }

            }

        ], (allProductsFounded, _searchs) => {
            let data = new Set();
            allProductsFounded.forEach((product) => {
                let _product = JSON.parse(product);
                resultPropertitiesSearchs.all.push(_product);
                _searchs.forEach((_search, index) => {
                    var exist = data.has(JSON.stringify(_product));
                    if (!exist) {
                        //console.log("xxxxxxxxxxxxx ",_search, _product);
                        if (_search.condition_id == _product.condition_id && _search.type_id == _product.type_id && _search.categorie_id == _product.categorie_id && _product.municipalitie_id == _search.municipalitie_id) {

                            resultPropertitiesSearchs.property_searchs.push(_product);
                            data.add(JSON.stringify(_product));
                        } else {
                            if (index == _searchs.length - 1) {
                                resultPropertitiesSearchs.suggestions.push(_product);
                            }
                        }


                    }
                });
            });
            data.clear();
            const nextPage = resultPropertitiesSearchs.all.length > _limit;
            if (nextPage) {
                //On retire le dernier product car nous avons faire limit+1
                resultPropertitiesSearchs.all.pop();
            }
            let cursor = null;
            if (nextPage && resultPropertitiesSearchs.all.length > 0) {
                const lastProduct = resultPropertitiesSearchs.all[resultPropertitiesSearchs.all.length - 1];
                cursor = lastProduct.created_at.getTime() + "_" + lastProduct.id;
            }
            return res.json({
                status: 200,
                pagination: {
                    hasMore: nextPage,
                    nextCursor: cursor
                },
                results: resultPropertitiesSearchs.all,
                suggestions: resultPropertitiesSearchs.suggestions,
                property_searchs: resultPropertitiesSearchs.property_searchs
            })
        })
    },

    notififyCompany: (req, res) => {
        const hearderAuth = req.headers["authorization"];
        const user = jwtUtils.getUser(hearderAuth);

        iAsync.waterfall([
            (done) => {
                model.companies.findOne({
                    where: { user_id: user.userId },
                    include: [
                        {
                            model: model.users,
                            include: [
                                { model: model.countries }
                            ],
                            attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },

                        }
                    ]
                }).then((_company) => {
                    done(null, _company);
                }).catch((error) => {
                    return res.json({
                        status: 500,
                        success: false,
                        error: "" + error
                    })
                });
            }, (_company, done) => {
                //console.log("Valleur xxxxxxxxxx ", _company)
                if (_company) {
                    model.property_searchs.findAll({
                        where: {
                            countrie_id: _company.countrie_id, status: 1,
                            user_id: { [Op.ne]: user.userId }
                        },
                        include: [
                            {
                                model: model.users,
                                attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                                required: true
                            },
                            {
                                model: model.countries,
                            },
                            { model: model.cities },
                            { model: model.municipalities },
                            { model: model.categories },
                            { model: model.conditions },
                            { model: model.types },
                        ]
                    }).then((_properties) => {
                        done(_company, _properties);
                    }).catch((error) => {
                        return res.json({
                            status: 500,
                            success: false,
                            error: "" + error
                        })
                    });
                } else {
                    return res.json({
                        status: 404,
                        success: false,
                        error: "" + error
                    });
                }
            },
        ], (_company, _properties) => {
            return res.json({
                status: 200,
                success: true,
                searchs: _properties
            });
        });
    }


}