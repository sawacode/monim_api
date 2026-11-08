//Import
const { Op } = require("sequelize");
const bcrypt = require('bcrypt')
const jwtUtils = require('../utils/jwt.utils');
const uniqueId = require('../utils/uniqueId.utils');
const model = require('../models');
const iAsync = require('async');

//Contances
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/;

const date = new Date();

//Méthodes
module.exports = {

    //Vérifier si l'adresse email ou le numéro existe
    verifyAddressAndNumber: (req, res) => {
        let identify = req.body.identify;

        model.users.findOne({
            where: {
                [Op.or]: [{ email: identify }, { phone: identify }]
            }
        }).then((user) => {
            //console.log("Value xxxxxxxxxxx ",user);
            if (user) {
                if (user.email == identify) {
                    return res.json({
                        status: 200,
                        success: true,
                        data: "email"
                    });
                } else if (user.phone == identify) {
                    return res.json({
                        status: 200,
                        success: true,
                        data: "phone"
                    });
                }

            } else {
                return res.json({
                    status: 200,
                    success: false,
                    data: "ok"
                });
            }

        }).catch((error) => {
            return res.json({
                status: 500,
                error: "" + error
            });
        })
    },

    /** Inscription de l'untilisateur */
    register: (req, res) => {
        //return  res.status(200).json({"message: ": req.body});
        /** Propriétés */
        let email = req.body.email;
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let password = req.body.password.replace("/\s/g", "");
        let tel = req.body.phone;
        let role = req.body.role;
        let country_name = req.body.country_name;
        let country_code = req.body.country_code;
        let country_slug = req.body.country_slug;
        let number_size = req.body.number_size;

        /** VALIDATION */
        if (firstname == null || password == null || tel == null) {
            return res.status(200).json({
                'status': 400,
                'error': 'missing parameters'
            });
        }
        //Vérification de la taille du nom
        if (firstname.length >= 15 || firstname.length <= 2) {
            return res.status(200).json({
                'status': 400,
                'error': 'wrong username (must be lenght 2 - 15'
            });
        }
        /*if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({
                status: 400,
                error: "Address email invalide",
            });
        }
        //Vérification du mot de passe
        if (!REGEX_PASSWORD.test(password)) {
            return res.statu(200).json({
                'status': 400,
                'error': 'Password invalid'
            })
        }*/

        //waterfull inscription ( Passé les données d'une fonction à l'autre puis retourne un resultat global)
        iAsync.waterfall([

            (done) => {

                //Démarrer la trasaction
                model.sequelize
                    .transaction()
                    .then((_transaction) => {
                        transaction = _transaction;
                        done(null, transaction);
                    })
                    .catch((err) => {
                        return res.json({
                            status: 500,
                            error: "" + err,
                        });
                    });


            }, (transaction, done) => {
                model.users.findOne({
                    attributes: ['phone'],
                    where: { phone: tel }
                }, { transaction }).then((_user) => {

                    done(null, transaction, _user);
                })
                    .catch((err) => {
                        return res.json({
                            'status': 404,
                            'error': 'unable to verify user !' + err
                        });
                    });
            }, (transaction, _user, done) => {
                if (!_user) {
                    bcrypt.hash(password, 10, (err, bcryptedPassword) => {
                        done(null, transaction, bcryptedPassword);
                    });
                } else {
                    return res.json({
                        'status': 400,
                        success: false,
                        'error': 'user already exist',
                        data: "dsd"
                    });
                }
            }, (transaction, bcryptedPassword, done) => {
                model.countries.findOrCreate(
                    {
                        where: { countries_code: country_code },
                        defaults: {
                            countries_name: country_name,
                            countries_status: 1,
                            countries_code: country_code,
                            number_size: number_size,
                            created_at: date.getTime(),
                            updated_at: date.getTime(),
                            slug: country_slug
                        },
                        transaction: transaction
                    },
                ).then(([_country, created]) => {
                    done(null, transaction, bcryptedPassword, _country);
                })
                    .catch((err) => {
                        return res.json({
                            status: 500,
                            error: "Can not verify country " + err,
                        });
                    });
            },
            (transaction, bcryptedPassword, _country, done) => {

                if (_country) {
                    model.users.create({
                        firstname: firstname,
                        lastname: lastname,
                        password: bcryptedPassword,
                        email: email,
                        phone: tel,
                        user_enable: 1,
                        status: 1,
                        role_slog: role,
                        countrie_id: _country.id,
                        created_at: date.getTime(),
                        updated_at: date.getTime()
                    }, { transaction })
                        .then((newUser) => {

                            done(transaction, newUser);
                        }).catch((err) => {
                            return res.json({
                                'status': 404,
                                'error': 'connot add user ' + err
                            });
                        });
                } else {
                    return res.json({
                        'status': 400,
                        'error': 'Country is not found.'
                    });
                }
            }
        ], (transaction, newUser) => {
            if (!newUser) {
                if (transaction) {
                    transaction
                        .rollback()
                        .then(() => {
                            //console.error("Transaction rolled back*****:", err);
                            return res.json({
                                status: 500,
                                error: "Internal Server Error " + err,
                            });
                        })
                        .catch((rollbackErr) => {
                            //console.error("Rollback errorxxxxxxx:", rollbackErr);
                            return res
                                .json({ status: 500, error: "Internal Server Error" + rollbackErr });
                        });
                } else {

                    return res
                        .json({ status: 500, error: "Internal Server Error " + err });
                }
            } else {
                transaction
                    .commit()
                    .then(() => {
                        //const lastImage = images[images.length - 1];
                        //console.log("resultat de la var xxxxxxxx  ", newUser);
                        return res.json({
                            status: 200,
                            success: true,
                            data: jwtUtils.generateTokenForUser(newUser)
                        });
                    })
                    .catch((commitErr) => {

                        return res
                            .json({ status: 500, error: "Internal Server Error " + commitErr });
                    });
            }

        });
    },
    /**  Connexion de l'utilisateur */
    login: (req, res) => {
        let identifier = req.body.identifier;
        let password = req.body.password;
        if (identifier == null || password == null) {
            return res.json({ status: 404, success: false, error: 'missing parameters' })
        }

        //waterfull
        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    where: { [Op.or]: [{ email: identifier }, { phone: identifier }] },

                }).then((user) => {
                    done(null, user)
                })
                    .catch((error) => {
                        return res.status(200).json({
                            status: 500,
                            success: false,
                            error: 'unable to verify user ' + error,
                        });
                    })
            }, (user, done) => {
                if (user) {
                    bcrypt.compare(password, user.password, (errBycrypt, resBycript) => {

                        if (errBycrypt) {
                            return res.json({
                                status: 500,
                                error: "" + err
                            });
                        } else {
                            done(null, user, resBycript)
                        }

                    });
                } else {
                    return res.status(200).json({
                        status: 404,
                        success: false,
                        error: 'user not exist in DB'
                    });
                }
            }, (user, resBycript, done) => {
                if (resBycript) {
                    if (user.user_enable == false) {
                        return res.json({
                            status: 411,
                            success: false,
                            error: 'User is disabled'
                        });
                    }
                    model.users.findOne({
                        where: { id: user.id },
                        attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token",] },
                        include: [
                            {
                                model: model.countries,
                            }
                        ]
                    }).then((_user) => {
                        done(_user, resBycript);
                    })
                        .catch((error) => {
                            return res.json({
                                status: 500,
                                success: false,
                                error: '' + error,
                            });
                        })
                } else {
                    return res.status(200).json({
                        status: 404,
                        success: false,
                        error: 'invalid password'
                    })
                }
            }
        ], (_user, resBycript) => {
            if (resBycript) {
                return res.status(200).json({
                    status: 200,
                    success: true,
                    user: _user,
                    token: jwtUtils.generateTokenForUser(_user)
                })
            } else {
                return res.status(200).json({
                    status: 404,
                    success: false,
                    error: 'invalid password'
                })
            }
        })
    },

    profile: (req, res) => {
        let headerAuth = req.headers['authorization'];
        //Id de l'utilisateur
        var user = jwtUtils.getUser(headerAuth);
        if (user == null) return res.json({ status: 444, error: 'wrong token ' });


        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
                    include: [
                        { model: model.countries },
                        { model: model.cities },
                        { model: model.municipalities },
                        { model: model.districts },
                        {
                            model: model.companies,
                            include: [{ model: model.subscriptions }, { model: model.countries }]
                        },
                    ],
                    where: { id: user.userId, phone: user.userPhone }
                }).then((user) => {
                    if (user) {
                        done(null, user);
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
                        error: 'Cannt fetch user ' + err
                    });
                });
            }, (user, done) => {
                model.products.findAll({
                    where: { companie_id: user.company.id }
                }).then((products) => {
                    done(null, user, products);
                }).catch((err) => {
                    return res.json({
                        statut: 500,
                        error: "xxxxxx " + err
                    });
                });
            }, (user, products, done) => {
                var productOffline = 0;
                var productInline = 0;

                products.forEach(product => {
                    if (product.pro_inline == true) {
                        productInline += 1;
                    } else {
                        productOffline += 1;
                    }
                })

                done(user, products, productInline, productOffline);

            }
        ], (user, products, productInline, productOffline) => {
            return res.json({
                status: 200,
                user: user,
                company: user.company,
                length: products.length,
                inline: productInline,
                offline: productOffline,
            })
        });
    },

    //Récupération de l'authentification de l'utilisateur
    auth: (req, res) => {
        let headerAuth = req.headers['authorization'];
        //Id de l'utilisateur
        var user = jwtUtils.getUser(headerAuth);
        if (user == null) return res.json({ status: 444, error: 'wrong token ' + userId });

        model.users.findOne({
            where: { id: user.userId, phone: user.userPhone },
            attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
            include: [
                { model: model.countries },
                { model: model.cities },
                { model: model.municipalities },
                { model: model.districts },

            ],

        }).then((user) => {

            if (user) {
                return res.status(200).json({ status: 200, success: true, user: user });
            } else {
                res.json({
                    status: 404,
                    success: false,
                    error: 'user not found'
                });
            }
        }).catch((err) => {
            return res.json({
                status: 500,
                success: false,
                error: 'Cannt fetch user ' + err
            });
        });
    },
    //Modification du compte de l'utilisateur
    updateUserName: (req, res) => {
        const headerAuth = req.headers['authorization']; //token
        const user = jwtUtils.getUser(headerAuth); //l'untilisateur
        const country_name = req.body.country_name;
        const country_slug = req.body.country_slug;
        const country_phonecoode = req.body.country_phonecoode;
        let number_size = req.body.number_size;

        //Params
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;

        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    where: { id: user.userId, phone: user.userPhone },
                    attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
                    include: [
                        { model: model.countries },
                        { model: model.cities },
                        { model: model.municipalities },
                        { model: model.districts }
                    ]
                }).then((userFound) => {
                    done(null, userFound);
                }).catch((err) => {
                    return res.json({
                        status: 500,
                        error: 'unable to verify user'
                    });
                });
            }, (userFound, done) => {
                if (userFound) {

                    model.countries.findOrCreate(
                        {
                            where: { countries_code: country_phonecoode != null ? country_phonecoode : userFound.country.countries_code },
                            defaults: {
                                countries_name: country_name,
                                countries_status: 1,
                                countries_code: country_phonecoode,
                                number_size: number_size,
                                created_at: date.getTime(),
                                updated_at: date.getTime(),
                                slug: country_slug
                            },
                        }

                    )
                        .then(([_country, created]) => {
                            done(null, userFound, _country);
                        })
                        .catch((err) => {
                            return res.json({
                                status: 500,
                                error: "Can not verify country " + err,
                            });
                        });

                } else {
                    return res.json({
                        status: 404,
                        status: false,
                        error: "User not found"
                    });
                }
            },
            (userFound, _country, done) => {

                if (_country) {
                    try {
                        userFound.countrie_id = _country.id;
                        userFound.firstname = firstname;
                        userFound.lastname = lastname;
                        userFound.save();
                        done(userFound);
                    } catch (error) {
                        return res.json({
                            status: 500,
                            success: false,
                            error: "" + error
                        })
                    }

                } else {
                    return res.json({
                        status: 404,
                        status: false,
                        error: "Country not found"
                    });
                }
            },
        ],
            (userFound) => {
                if (userFound) {
                    return res.json({
                        status: 200,
                        success: true,
                        user: userFound
                    });
                } else {
                    return res.json({
                        status: 404,
                        error: "User not found"
                    });
                }
            })
    },
    updateEmail: (req, res) => {
        let headerAuth = req.headers['authorization']; //token
        let user = jwtUtils.getUser(headerAuth); //L'utilisateur

        const email = req.body.email;

        if (!EMAIL_REGEX.test(email)) {
            return res.status(400).json({
                status: 400,
                error: "Address email invalide",
            });
        }
        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    where: { id: user.userId, phone: user.userPhone },
                    attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
                    include: [
                        { model: model.countries },
                        { model: model.cities },
                        { model: model.municipalities },
                        { model: model.districts }
                    ]
                }).then((_userFound) => {
                    done(null, _userFound);
                }).catch((err) => {
                    return res.json({
                        status: 500,
                        error: '' + err
                    });
                })
            }, (_userFound, done) => {
                if (_userFound) {
                    model.users.findOne({
                        where: { email: email }
                    }).then((_vUser) => {
                        done(_userFound, _vUser);
                    }).catch((err) => {
                        return res.json({
                            status: 500,
                            error: '' + err
                        });
                    })

                } else {
                    return res.json({
                        status: 404,
                        error: "User not found"
                    });
                }
            }
        ], (_userFound, _vUser) => {
            if (_vUser) {
                return res.json({
                    status: 406,
                    success: false,
                    error: "Email address already exists"
                });
            } else {
                try {
                    _userFound.email = email;
                    _userFound.save();
                    return res.json({
                        status: 200,
                        success: true,
                        user: _userFound,
                        token: jwtUtils.generateTokenForUser(_userFound)
                    });
                } catch (error) {
                    return res.json({
                        status: 500,
                        error: "" + error
                    });
                }
            }
        });

    },
    updatePhone: (req, res) => {
        let headerAuth = req.headers['authorization']; //token
        let user = jwtUtils.getUser(headerAuth); //L'utilisateur

        const phone = req.body.phone;
        const whatsapp = req.body.whatsapp;


        model.users.findOne({
            where: { id: user.userId, phone: user.userPhone },
            attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
            include: [
                { model: model.countries },
                { model: model.cities },
                { model: model.municipalities },
                { model: model.districts }
            ]
        }).then((userFound) => {
            if (userFound) {
                try {

                    if (phone != "" && phone != null || whatsapp != "" && whatsapp != null) {
                        if (phone != "" && phone != null) {
                            userFound.phone = phone;
                        }
                        if (whatsapp != "" && whatsapp != null) {
                            userFound.whatsapp = whatsapp;
                        }
                        userFound.save();
                    } else {
                        return res.json({
                            status: 400,
                            success: false,
                            error: "params mixed"
                        })
                    }
                    return res.json({
                        status: 200,
                        success: true,
                        user: userFound,
                        token: jwtUtils.generateTokenForUser(userFound)
                    });
                } catch (error) {
                    return res.json({
                        statut: 500,
                        error: "" + error
                    });
                }
            } else {
                return res.json({
                    status: 404,
                    error: "User not found"
                });
            }
        }).catch((err) => {
            return res.json({
                status: 500,
                error: '' + err
            });
        });

    },
    verifyCodeForResetPassword: (req, res) => {
        const email = req.body.email;
        const code = req.body.code;

        if (email == null || code == null) {
            return res.json({ status: 400, success: false, error: "Params missing" })
        }

        model.password_reset_tokens.findOne({
            where: { email: email, token: code }
        }).then((value) => {

            if (value) {

                value.token = null;
                value.save();

                return res.json({
                    status: 200,
                    success: true,
                    data: value
                });
            } else {
                return res.json({
                    status: 404,
                    success: false,
                    error: "Wrong token"
                });
            }
        }).catch((err) => {
            return res.json({
                status: 500,
                success: false,
                error: "" + err
            });
        })

    },

    createNewPassword: (req, res) => {
        const password = req.body.password;
        const email = req.body.email;

        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    where: { email: email }
                }).then((user) => {
                    done(null, user);
                }).catch((err) => {
                    return res.json({
                        status: 500,
                        success: false,
                        error: "" + err
                    });
                });
            }, (user, done) => {
                if (user) {
                    bcrypt.hash(password, 5, (err, bcryptedPassword) => {
                        done(null, user, bcryptedPassword);
                    });
                } else {
                    req.json({
                        status: 404,
                        success: false,
                        error: "User not found",
                    })
                }
            }, (user, bcryptedPassword, done) => {
                user.password = bcryptedPassword;
                created_at: date.getTime();
                user.save();
                done(user);
            }

        ], (user) => {
            if (user) {
                res.json({
                    status: 200,
                    success: true,
                    data: user
                });
            } else {
                return res.json({
                    status: 404,
                    success: false,
                    error: "User not found"
                });
            }
        })
    },

    updatePassword: (req, res) => {
        let headerAuth = req.headers['authorization']; //token
        let user = jwtUtils.getUser(headerAuth); //L'utilisateur

        const oldPassword = req.body.old_password;
        const newPassword = req.body.new_password;

        model.users.findOne({
            where: { id: user.userId, phone: user.userPhone },
            attributes: { exclude: ["email_verified", "confirm_token", "remember_token"] },
        }).then((_user) => {
            if (_user) {
                bcrypt.compare(oldPassword, _user.password, (err, resBycript) => {
                    if (resBycript) {
                        bcrypt.hash(newPassword, 10, (error, bcryptedPassword) => {
                            if (error) {
                                return res.json({
                                    status: 500,
                                    error: "" + err
                                });
                            } else {
                                _user.password = bcryptedPassword;
                                _user.save();
                                return res.json({
                                    status: 200,
                                    success: true,
                                    data: "updated!"
                                })
                            }
                        });
                    } else {
                        return res.status(200).json({
                            status: 401,
                            success: false,
                            error: 'Old password is not correct!'
                        })
                    }
                });

            } else {
                return res.json({
                    status: 404,
                    error: "User not found"
                });
            }
        }).catch((error) => {
            return res.json({
                status: 500,
                error: '' + error
            });
        })
    },
    //Ajout et modification de l'image
    addOrUpadeUserImage: (req, res) => {
        const file = req.file;
        let headerAuth = req.headers['authorization']; //token
        let user_id = jwtUtils.getUser(headerAuth); //L'utilisateur

        if (file == null || file.fieldname != "avatar") {
            return res.json({
                status: 404,
                success: false,
                error: "File not found"
            });
        }
        iAsync.waterfall([
            (done) => {
                model.users.findOne({
                    where: { id: user_id }
                }).then((_user) => {
                    //console.log("xxxxxxxxxxxxxxxxxxx",file.mimetype);
                    done(null, _user);
                }).catch((error) => {
                    return res.json({
                        status: 500,
                        success: false,
                        error: "" + error
                    });
                })
            }, (_user, done) => {
                //console.log("xxxxxxxxxxxxxxxxxxx",_company);
                if (_user) {
                    try {
                        _user.avatar = file.path;
                        _user.save();
                        done(_user);
                    } catch (error) {
                        return res.json({
                            status: 500,
                            success: false,
                            error: "" + error
                        });
                    }

                } else {
                    return res.json({
                        status: 404,
                        success: false,
                        error: "User not found"
                    });
                }
            }
        ], (_user) => {
            return res.json({
                status: 200,
                success: true,
                data: "Image added Successfully"
            });
        });


    },

    deleteAccount: (req, res) => {

        
    }
}