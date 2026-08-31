//Import
const { Op, where } = require("sequelize");
const bcrypt = require("bcrypt");
const jwtUtils = require("../utils/jwt.utils");
const uniqueId = require("../utils/uniqueId.utils");
const model = require("../models");
const iAsync = require("async");
const config = require("../config/app");

//Contances
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const REGEX_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$/;

const date = new Date();
exports.date = date;

module.exports = {
  storeWithUser: (req, res) => {
    //return  res.status(200).json({"message: ": req.body});
    /** Propriétés */
    let email = req.body.email;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let password = req.body.password.replace("/s/g", "");
    let tel = req.body.phone;
    let birth = req.body.birth;
    let country_name = req.body.country_name;
    let country_code = req.body.country_code;
    let role_slog = req.body.role;
    let whatsapp = req.body.whatsapp;
    let companie_name = req.body.companie_name;
    let companie_description = req.body.companie_description;
    let companie_slogan = req.body.companie_slogan;
    let country_slug = req.body.country_slug;
    let number_size = req.body.number_size;

    //let logo = req.file;
    //const baseURL = `${req.protocol}://${req.get("host")}${config.base_url}/`;

    /** VALIDATION */
    if (firstname == null || password == null || tel == null || birth == null) {
      return res.json({
        status: 400,
        error: "missing parameters",
      });
    }
    //Vérification de la taille du nom
    if (firstname.length >= 15 || firstname.length <= 2) {
      return res.json({
        status: 400,
        error: "wrong username (must be lenght 2 - 15",
      });
    }
    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        status: 400,
        error: "Address email invalide",
      });
    }
    //Vérification du mot de passe
    /**if (!REGEX_PASSWORD.test(password)) {
      return res..status(400).json({
        status: 400,
        error: "Password invalid",
      });
    }*/

    let transaction;
    iAsync.waterfall(
      [
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
        },
        (transaction, done) => {
          //Vérifier l'utilisateur
          model.users
            .findOne(
              {
                where: { phone: tel, email: email },
              },
              { transaction }
            )
            .then((_user) => {
              done(null, transaction, _user);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                error: "" + err,
              });
              //done(err, transaction);
            });
        },
        (transaction, _user, done) => {
          //Crypter le mot de passe
          if (!_user) {
            bcrypt.hash(password, 10, (err, bcryptedPassword) => {
              done(null, transaction, bcryptedPassword);
            });
          } else {
            return res.json({
              status: 400,
              success: false,
              error: "user already exist",
              data: ""
            });
          }
        },
        (transaction, bcryptedPassword, done) => {
          //Réccupérer du pays

          model.countries
            .findOrCreate(
              {
                where: { countries_code: country_code },
                defaults: {
                  countries_name: country_name,
                  countries_status: 1,
                  countries_code: country_code,
                  countries_currency: "??",
                  number_size: number_size,
                  created_at: date.getTime(),
                  updated_at: date.getTime(),
                  slug: country_slug
                },
                transaction: transaction
              }

            )
            .then(([_country, created]) => {
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
          //Créer le compte utilisateur
          if (_country) {
            model.users.create(
              {
                firstname: firstname,
                lastname: lastname,
                password: bcryptedPassword,
                email: email,
                phone: tel,
                birth: birth,
                whatsapp: whatsapp,
                user_enable: 1,
                status: 1,
                role_slog: role_slog,
                countrie_id: _country.id,
                created_at: date.getTime(),
                updated_at: date.getTime(),
              },
              { transaction }
            )
              .then((newUser) => {
                done(null, transaction, _country, newUser);
              })
              .catch((err) => {
                return res.json({
                  status: 500,
                  error: "couxx " + err,
                });
              });
          } else {
            return res.status(200).json({
              status: 404,
              error: "Country is not found.",
            });
          }
        },
        (transaction, _country, newUser, done) => {

          //Créer de la compagnie
          if (newUser) {
            let identifier = uniqueId.generateUniqueIdentifier(newUser.id, 12);
            model.companies.create(
              {
                companie_name: companie_name,
                companie_description: companie_description,
                companie_status: 1,
                companie_slogan: companie_slogan,
                companie_logo: null,
                identifier: identifier,
                created_at: date.getTime(),
                updated_at: date.getTime(),
                user_id: newUser.id,
                countrie_id: _country.id,
              },
              { transaction }
            )
              .then((company) => {
                done(null, transaction, newUser, company);
              })
              .catch((err) => {
                return res.json({
                  status: 500,
                  error: "usxx " + err,
                });
              });
          } else {
            return res.json({
              status: 400,
              error: "User company not create.",
            });
          }
        },
        (transaction, newUser, company, done) => {
          if (company) {
            model.pack_subscriptions.findOne({
              where: { pack_slug: "pack_vlsgratuit" }
            }, { transaction }).then((pack) => {
              done(null, transaction, newUser, company, pack);
            }).catch((error) => {
              return res.json({
                status: 500,
                error: "cxx" + error
              });
            });
          } else {
            return res.json({
              status: 404,
              error: "Company not created"
            });
          }
        }, (transaction, newUser, company, pack, done) => {

          if (pack) {
            model.subscriptions.create({
              subscription_price: pack.pack_price,
              subscription_deadline: pack.pack_deadline,
              subscription_status: 1,
              subscription_start: date.getTime(),
              created_at: date.getTime(),
              pack_subscription_id: pack.id,
              companie_id: company.id,
              countrie_id: pack.countrie_id,
              s_number_of_properties: pack.number_of_properties,
              s_pack_type: pack.pack_type,
              deadline_editable: pack.deadline_editable,
              user_id: newUser.id
            }, { transaction }).then((subscription) => {
              done(null, transaction, newUser, company, pack, subscription);
            }).catch((error) => {

              return res.json({
                status: 500,
                error: "ssuxx " + error
              });

            });

          } else {
            return res.json({
              status: 404,
              error: "Pack not found"
            });
          }
        }, (transaction, newUser, company, pack, subscription, done) => {
          if (subscription) {
            model.pack_subscription_histories.create({
              price: subscription.subscription_price + " " + pack.pack_devis,
              start: subscription.created_at,
              wording: pack.pack_libele,
              icon: pack.image,
              deadline: subscription.subscription_deadline,
              status: subscription.subscription_status,
              type: pack.pack_libele,
              created_at: date.getTime(),
              updated_at: date.getTime(),
              subscription_id: subscription.id,
              companie_id: company.id,
              pack_subscriptions_id: pack.id,
              user_id: newUser.id

            }, { transaction }).then((pack_subscription_histories) => {

              done(transaction, newUser, company, subscription);

            }).catch((error) => {

              return res.json({
                status: 500,
                error: "su_hxx " + error
              });

            });
          } else {
            return res.json({
              status: 404,
              error: "subscription not found"
            });
          }
        }
      ],
      (transaction, newUser, company, subscription) => {
        if (!newUser || !company || !subscription) {
          if (transaction) {
            transaction
              .rollback()
              .then(() => {
                ///console.error("Transaction rolled back*****:", err);
                return res.json({
                  status: 500,
                  error: "Internal Server Error " + err,
                });
              })
              .catch((rollbackErr) => {
                console.error("Rollback errorxxxxxxx:", rollbackErr);
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
              return res.json({
                status: 200,
                success: true,
                data: jwtUtils.generateTokenForUser(newUser)
              });
            })
            .catch((commitErr) => {
              console.error("Commit error:", commitErr);
              return res
                .json({ status: 500, error: "Internal Server Error " + commitErr });
            });
        }
      }
    );
  },
  store: (req, res) => {
    //return  res.status(200).json({"message: ": req.body});
    /** Propriétés */
    let countrie_id = req.body.countrie_id;
    let companie_name = req.body.companie_name;
    let companie_description = req.body.companie_description;
    let companie_slogan = req.body.companie_slogan;
    let logo = req.file;
    const baseURL = `${req.protocol}://${req.get("host")}${config.base_url}/`;
    let hearderAuth = req.headers["authorization"];
    let userId = jwtUtils.getUser(hearderAuth);

    /** VALIDATION */
    if (companie_name == null || logo == null) {
      return res.json({
        status: 400,
        error: "missing parameters",
      });
    }
    iAsync.waterfall(
      [
        (done) => {
          //Vérifier l'utilisateur
          model.users
            .findOne({
              where: { id: userId },
            })
            .then((_user) => {
              done(null, _user);
            })
            .catch((err) => {
              return res.status(500).json({
                status: 500,
                error: err,
              });
            });
        },
        (_user, done) => {
          if (_user) {
            const logoPath = baseURL + logo.path;
            model.companies
              .findOne({
                where: { user_id: _user.id },
              })
              .then((company) => {
                done(null, _user, company);
              })
              .catch((err) => {
                return res.status(500).json({
                  status: 500,
                  error: err,
                });
              });
          } else {
            return res.status(400).json({
              status: 400,
              error: "User has not been authenticated.",
            });
          }
        },
        (_user, company, done) => {
          //Créer le compte utilisateur
          if (!company) {
            const logoPath = baseURL + logo.path;
            model.companies.create({
              companie_name: companie_name,
              companie_description: companie_description,
              companie_status: 1,
              companie_slogan: companie_slogan,
              companie_logo: logoPath,
              created_at: date.getTime(),
              updated_at: date.getTime(),
              user_id: _user.id,
              countrie_id: _user.countrie_id,
            })
              .then((newCompany) => {
                done(newCompany);
              })
              .catch((err) => {
                return res.status(500).json({
                  status: 500,
                  error: err,
                });
              });
          } else {
            return res.status(400).json({
              status: 400,
              error: "This user already has a company.",
            });
          }
        },
      ],
      (newCompany) => {
        if (newCompany) {
          res.status(201).json({
            status: 201,
            company: newCompany,
          });
        }
      }
    );
  },
  //Afficher les détails de la companie
  show: (req, res) => {
    let company_id = req.params.company_id;
    let hearderAuth = req.headers["authorization"];
    let userId = jwtUtils.getUser(hearderAuth);

    iAsync.waterfall([
      (done) => {
        //Vérifier l'utilisateur
        model.users
          .findOne({
            where: { id: userId },
          })
          .then((_user) => {
            done(null, _user);
          })
          .catch((err) => {
            return res.status(500).json({
              status: 500,
              error: "" + err,
            });
          });
      }, (_user, done) => {
        if (_user) {
          model.companies.findOne({
            where: { id: company_id },
            include: [
              { model: model.users }
            ]
          }).then((_company) => {
            done(_company);
          }).catch((err) => {
            res.status(500).json({
              status: 500,
              error: "" + err
            })
          });
        } else {
          return res.status(400).json({
            status: 400,
            error: "User has not been authenticated.",
          });
        }
      }
    ], (_company) => {
      if (_company) {
        res.status(201).json({
          status: 201,
          company: _company
        });
      } else {
        res.status(404).json({
          status: 404,
          error: "Company not found"
        });
      }


    });

  },
  companyRealstateByType: (req, res) => {
    const type_slog = req.params.type_slog;
    let headerAuth = req.headers['authorization'];
    //Id de l'utilisateur
    var user = jwtUtils.getUser(headerAuth);

    model.types.findOne({
      where: { type_slog: type_slog },
      include: [{
        model: model.products,
        where: { user_id: user.userId },
        order: [["id", "DESC"]],
        include: [{
          model: model.folders
        }]
      }]

    }).then((_type) => {
      return res.json({
        status: 200,
        success: true,
        type: _type
      })
    }).catch((err) => {
      return res.json({
        status: 500,
        success: false,
        error: "" + err
      });
    });

  },
  //Liste des produits de l'agent immobilier
  allCompanyRealstate: (req, res) => {
    let _limit = parseInt(req.params.limit) || 20;
    let nextCursor = req.query.cursor || null;
    let headerAuth = req.headers['authorization'];
    //Id de l'utilisateur
    var user = jwtUtils.getUser(headerAuth);

    let option_where = {
      user_id: user.userId
    }
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

    model.products.findAll({
      where: option_where,
      limit: _limit +1,
      order: [["id", "DESC"]],
      include: [
        {
          model: model.countries,
          include: [
            {
              model: model.cities,
              include: [
                { model: model.municipalities }
              ]
            }
          ]
        },
        { model: model.cities },
        { model: model.municipalities },
        { model: model.districts },
        { model: model.conditions },
        { model: model.product_identifies },
        { model: model.categories },
        {
          model: model.likes,
          required: false
        },
        { model: model.types },
        { model: model.folders },
      ]
    }).then((_products) => {
      //console.log("Limitxxxxxxxx",_products.length)
      const nextPage = _products.length > _limit;
      if (nextPage) {
        //On retire le dernier product car nous avons faire limit+1
        _products.pop();
      }
      let cursor = null;
      if (nextPage && _products.length > 0) {
        const lastProduct = _products[_products.length - 1];
        cursor = lastProduct.created_at.getTime() + "_" + lastProduct.id;
      }
      return res.json({
        status: 200,
        success: true,
        products: _products,
        pagination: {
          hasMore: nextPage,
          nextCursor: cursor
        },
      })
    }).catch((err) => {
      return res.json({
        status: 500,
        success: false,
        error: "" + err
      });
    })
  },

  //Mettre un produit en ligne ou hors ligne
  productInlineOrOffline: (req, res) => {
    const id = req.params.id;
    const value = req.body.value;
    let headerAuth = req.headers['authorization'];
    //Id de l'utilisateur
    var user = jwtUtils.getUser(headerAuth);

    model.products.findOne({
      where: { id: id, user_id: user.userId }
    }).then((_product) => {
      if (_product) {
        _product.pro_inline = value;
        _product.save();
        return res.json({
          status: 200,
          success: true,
          data: "Successfully"
        });
      } else {
        return res.json({
          status: 404,
          success: false,
          error: "Product not found"
        });
      }

    }).catch((err) => {
      return res.json({
        status: 500,
        success: false,
        error: "" + err
      });
    });
  },
  //Supprimer un bien
  deleteProduct: (req, res) => {
    const productId = req.params.id;
    let headerAuth = req.headers['authorization'];
    //Id de l'utilisateur
    var user = jwtUtils.getUser(headerAuth);
    let transaction;
    iAsync.waterfall([
      (done) => {
        model.sequelize
          .transaction()
          .then((_transaction) => {
            transaction = _transaction;
            done(null, transaction);
          }).catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "" + err
            });
          })
      }, (transaction, done) => {
        model.companies.findOne({
          where: { user_id: user.userId }
        }, { transaction }).then((_company) => {
          done(null, transaction, _company);
        }).catch((err) => {
          return res.json({
            status: 500,
            success: false,
            error: "" + err
          });
        })
      }, (transaction, _company, done) => {
        if (_company) {
          model.products.destroy({
            where: { id: productId, user_id: user.userId, companie_id: _company.id }
          }, { transaction })
            .then((_product) => {
              done(null, transaction, _company)
            }).catch((err) => {
              return res.json({
                status: 500,
                success: false,
                error: "" + err
              });
            });
        } else {
          return res.json({
            status: 404,
            success: false,
            error: "Company not found"
          });
        }
      }, (transaction, _company, done) => {
        model.favorites.destroy({
          where: { product_id: productId }
        }, { transaction })
          .then((_) => {
            done(null, transaction, _company)
          }).catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "" + err
            });
          });
      },
      (transaction, _company, done) => {

        model.action_of_properties.create({
          action: "product deleted",
          created_at: date.getTime(),
          companie_id: _company.id,
          product_id: productId
        }, { transaction }).
          then((_action_of_properties) => {
            done(transaction, _company, _action_of_properties);
          }).catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "" + err
            });
          })


      }
    ], (transaction, _company, _action_of_properties) => {

      if (_company && _action_of_properties) {
        transaction.commit()
          .then((value) => {
            return res.json({
              status: 200,
              success: true,
              data: "Successfully"
            })
          }).catch((error) => {
            transaction.rollback();
          })
      } else {
        transaction.rollback()
          .then((value) => {
            return res.json({
              status: 501,
              success: false,
              error: "unknown error"
            })
          })
          .catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "" + error
            })
          })
      }
    })
  },
  //Mise à jour de la compagnie
  updateCompany: (req, res) => {
    const name = req.body.name;
    const slogan = req.body.slogan;
    const description = req.body.description;
    const company_id = req.params.company_id;

    const token = req.headers['authorization'];
    const user = jwtUtils.getUser(token);

    model.companies.findOne({
      where: { id: company_id, user_id: user.userId },
      include: [
        { model: model.countries },
        { model: model.subscriptions }
      ]
    }).then((_company) => {
      if (_company) {
        try {
          _company.companie_name = name;
          _company.companie_slogan = slogan;
          _company.companie_description = description;
          _company.save();
          return res.json({
            status: 200,
            company: _company
          })
        } catch (error) {
          return res.json({
            status: 500,
            error: "" + error
          });
        };

      } else {
        return res.json({
          staus: 404,
          error: "Company not found"
        });
      }
    }).catch((error) => {
      return res.json({
        status: 500,
        error: "" + error
      })
    })

  },
  //Ajout et modification de l'image
  addOrUpadeImage: (req, res) => {
    const file = req.file;
    const company_id = req.body.company_id;

    if (file == null || file.fieldname != "avatar") {
      return res.json({
        status: 404,
        success: false,
        error: "File not found"
      });
    }
    iAsync.waterfall([
      (done) => {
        model.companies.findOne({
          where: { id: company_id }
        }).then((_company) => {
          //console.log("xxxxxxxxxxxxxxxxxxx",file.mimetype);
          done(null, _company);
        }).catch((error) => {
          return res.json({
            status: 500,
            success: false,
            error: "" + error
          });
        })
      }, (_company, done) => {
        //console.log("xxxxxxxxxxxxxxxxxxx",_company);
        if (_company) {
          try {
            _company.companie_logo = file.path;
            _company.save();
            done(_company);
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
            error: "Company not found"
          });
        }
      }
    ], (_company) => {
      return res.json({
        status: 200,
        success: true,
        data: "Image added Successfully"
      });
    });
  },

  histories: (req, res) => {
    const token = req.headers['authorization'];
    const user = jwtUtils.getUser(token);

    iAsync.waterfall([
      (done) => {

        model.companies.findOne({
          where: { user_id: user.userId }
        }).then((_company) => {
          done(null, _company);
        }).catch((error) => {
          return res.json({
            status: 500,
            error: "" + error
          });

        });
      }, (_company, done) => {
        if (_company) {
          model.pack_subscription_histories.findAll({
            order: [["id", "DESC"]],
            where: { user_id: user.userId, companie_id: _company.id },
            include: [
              {
                model: model.pack_subscriptions,
                include: [{ model: model.countries }]
              }
            ]
          }).then((_histories) => {
            done(_company, _histories);
          }).catch((error) => {
            return res.json({
              status: 500,
              error: "" + error
            });

          });
        } else {
          return res.json({
            status: 404,
            error: "Company not found"
          });
        }
      }
    ], (_company, _histories) => {
      return res.json({
        status: 200,
        histories: _histories
      })
    })
  }
};
