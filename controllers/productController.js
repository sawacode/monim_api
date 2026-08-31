//Import
const { Op, Sequelize } = require("sequelize");
const iAsync = require("async");
const jwtUtils = require("../utils/jwt.utils");
const helper = require("../utils/helper.utils");
const model = require("../models");
const uniqueId = require('../utils/uniqueId.utils');
const config = require("../config/app");
const date = new Date();


module.exports = {
  //Lister les posts
  all: (req, res) => {
    let _limit = req.params.count == null ? null : parseInt(req.params.count);
    //console.log("Ressxxxxxxxxxxxxxxxxx :", _limit);
    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findAll({
              limit: _limit,
              where: { pro_inline: 1 },
              order: [["id", "DESC"]],
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
                { model: model.districts },
                { model: model.categories },
                { model: model.conditions },
                { model: model.companies },
                { model: model.types },

              ],
            })
            .then((_products) => {
              done(_products);
            })
            .catch((err) => {
              return res.status(500).json({
                status: 500,
                error: "" + err,
              });
            });
        },
      ],
      (_products) => {
        if (_products) {
          return res.status(200).json({
            status: 200,
            length: _products.length,
            products: _products,
          });
        } else {
          return res.status(200).json({
            status: 200,
            length: _products.length,
            products: _products,
          });
        }
      }
    );
  },
  allByCountry: (req, res) => {
    let _limit = parseInt(req.params.count) || 20;
    let _country_id = req.params.country_id;
    let option_where = { pro_inline: 1, pro_enable: 1 };
    let nextCursor = req.query.cursor || null;
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

    let country_table = {
      model: model.countries
    };
    if (_country_id != null && _country_id != "null" && _country_id != "") {
      country_table.where = { id: _country_id }
    }
    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findAll({
              limit: _limit + 1,
              where: option_where,
              order: [["id", "DESC"]],
              include: [
                { model: model.folders, required: true },
                {
                  model: model.users,
                  attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                  include: [
                    {
                      model: model.countries,
                    },
                  ],
                },
                country_table,
                { model: model.cities },
                { model: model.municipalities },
                { model: model.districts },
                { model: model.categories },
                { model: model.product_identifies },
                { model: model.conditions },
                {
                  model: model.likes,
                  required: false
                },
                { model: model.companies },
                { model: model.types },

              ],
            })
            .then((_products) => {

              done(_products);
            })
            .catch((err) => {
              return res.status(500).json({
                status: 500,
                error: "" + err,
              });
            });
        },
      ],
      (_products) => {
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
        return res.status(200).json({
          status: 200,
          length: _products.length,
          pagination: {
            hasMore: nextPage,
            nextCursor: cursor
          },
          products: _products,
        });
      }
    );
  },
  allByConditionIdOrSlug: (req, res) => {
    let _limit = req.params.count == null ? null : parseInt(req.params.count);
    let _condition = req.params.condition_id;

    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findAll({
              limit: _limit,
              order: [["id", "DESC"]],
              where: { pro_inline: 1, pro_enable: 1 },

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
                { model: model.companies },
                { model: model.product_identifies },
                { model: model.types },
                { model: model.districts },
                {
                  model: model.conditions,
                  where: {
                    [Op.or]: [
                      { id: _condition },
                      { conditions_slog: _condition },
                    ],
                  },
                },
              ],
            })
            .then((_products) => {
              done(_products);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                error: "" + err,
              });
            });
        },
      ],
      (_products) => {
        if (_products) {
          return res.status(200).json({
            status: 200,
            length: _products.length,
            products: _products,
          });
        } else {
          return res.status(200).json({
            status: 200,
            length: _products.length,
            products: _products,
          });
        }
      }
    );
  },

  moreProductByCountry: (req, res) => {
    let _limit = parseInt(req.params.count) || 20;
    let _country_id = req.params.country_id;
    let condition = req.params.condition_slug != "null" ? req.params.condition_slug : null;
    let type = req.params.type_slug != "null" ? req.params.type_slug : null;
    let category = req.params.categorie_slug != "null" ? req.params.categorie_slug : null;
    let nextCursor = req.query.cursor || null;

    let country_table = {
      model: model.countries
    };
    if (_country_id != "null") country_table.where = { id: _country_id }

    let option_where = { pro_inline: 1, pro_enable: 1 }

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

    //Condition
    const where_condition = {};
    if (condition != null) {
      where_condition.conditions_slog = condition;
    }

    //Type
    const where_type = {};
    if (type != null) {
      where_type.type_slog = type;
    }

    //Ctégorie
    where_category = {};
    if (category != null) {
      where_category.slug = category
    }

    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findAll({
              limit: _limit + 1,
              where: option_where,
              order: [['created_at', 'DESC'], ['id', 'DESC']],
              include: [
                { model: model.folders, required: true },
                {
                  model: model.users,
                  attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                  include: [
                    {
                      model: model.countries,
                    },
                  ],
                }, country_table,
                { model: model.cities },
                { model: model.product_identifies },
                { model: model.municipalities },
                { model: model.districts },
                {
                  model: model.categories,
                  where: where_category
                },
                {
                  model: model.likes,
                  required: false
                },
                {
                  model: model.conditions,
                  where: where_condition
                },
                { model: model.companies },
                {
                  model: model.types,
                  where: where_type
                },

              ],
            })
            .then((_products) => {
              done(_products);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                error: "" + err,
              });
            });
        },
      ],
      (_products) => {
        //console.log("Productsxxxxxxxx ", _products)
        //Vérifie s'il y a une page suivante
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
          pagination: {
            hasMore: nextPage,
            nextCursor: cursor
          },
          products: _products,

        });
      }
    );
  },

  allByTypeIdOrSlug: (req, res) => {
    let _limit = req.params.count == null ? null : parseInt(req.params.count);
    let _type = req.params.type_id;
    let _country_id = req.params.country_id;
    let country_table = {
      model: model.countries
    };
    let option_where = { pro_inline: 1, pro_enable: 1 };
    let nextCursor = req.query.cursor || null;
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
    if (_country_id != "null" && _country_id != "" && _country_id != null) country_table.where = { id: _country_id }
    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findAll({
              limit: _limit + 1,
              order: [["id", "DESC"]],
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
                country_table,
                { model: model.cities },
                { model: model.municipalities },
                { model: model.product_identifies },
                {
                  model: model.likes,
                  required: false
                },
                { model: model.companies },
                { model: model.categories },
                {
                  model: model.types,
                  where: {
                    [Op.or]: [
                      { id: _type },
                      { type_slog: _type },
                    ],
                  },
                },
                { model: model.districts },
                { model: model.conditions, },
              ],
            })
            .then((_products) => {
              done(_products);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                error: "" + err,
              });
            });
        },
      ],
      (_products) => {

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
        return res.status(200).json({
          status: 200,
          length: _products.length,
          pagination: {
            hasMore: nextPage,
            nextCursor: cursor
          },
          products: _products,
        });

      }
    );
  },
  //Afficher un post
  show: (req, res) => {
    let product_id = req.params.realestate_id;
    const headerAuth = req.headers['authorization'];
    var user = jwtUtils.getUser(headerAuth);
    iAsync.waterfall(
      [
        (done) => {
          model.products
            .findOne({
              where: { id: product_id, pro_inline: true, },
              include: [
                {
                  model: model.folders,
                  required: true
                },
                {
                  model: model.users,
                  required: true,
                  include: [
                    {
                      model: model.countries,
                    },
                  ],
                  attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                },
                {
                  model: model.countries,
                  required: true
                },
                {
                  model: model.cities,
                  required: false
                },
                {
                  model: model.municipalities,
                  required: false
                },
                { model: model.product_identifies },
                {
                  model: model.categories,
                  required: true
                },
                {
                  model: model.companies,
                  required: true
                },
                {
                  model: model.likes,
                  required: false
                },
                {
                  model: model.types,
                  required: true
                },
                {
                  model: model.conditions,
                  required: true
                },
              ],
            })
            .then((_product) => {
              done(null, _product);
            }).catch((error) => {
              return res.json({
                status: 500,
                error: "" + error
              })
            });
        },
        (_product, done) => {
          // console.log("token user 1 xxxxxxxxxxxxxxxxxxxx ",headerAuth);
          model.users.findOne({
            where: { id: user ? user.userId : null, phone: user ? user.userPhone : null },
            attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
          }).then((_user) => {
            done(null, _product, _user);
          }).catch((error) => {
            return res.json({
              status: 500,
              error: "1" + error
            })
          });
        },
        (_product, _user, done) => {
          //console.log("User xxxxxxxxxxxxxxxxxxxx ",_user);
          if (_user) {
            model.likes.findOne({
              where: { user_id: _user.id, product_id: _product.id }
            }).then((like) => {
              done(_product, _user, like);
            }).catch((error) => {
              return res.json({
                status: 500,
                error: "2" + error
              })
            });
          } else {
            done(_product, _user);
          }
        }
      ],
      (_product, _user, like) => {
        try {
          //console.log("Like xxxxxxxxxxxxxxxxxxxx ",like);
          _product.liked = like ? true : false;
          //_product.like_count = _product.likes.length;

          //console.log("Like xxxxxxxxxxxxxxxxxxxx ",_product);
          return res.status(200).json({
            status: 200,
            product: _product,
          });
        } catch (error) {
          return res.json({
            status: 500,
            error: "2" + error
          })
          //console.log("Er xxxxxxxxxxxxxxxx",err);
        }


      }
    );
  },

  likeOrDislike: (req, res) => {
    const headerAuth = req.headers['authorization'];
    const product_id = req.params.product_id;
    //Id de l'utilisateur
    var user = jwtUtils.getUser(headerAuth);
    if (user == null) return res.json({ status: 444, error: 'wrong token ' });

    iAsync.waterfall([
      (done) => {
        model.users.findOne({
          where: { id: user.userId, phone: user.userPhone },
          attributes: { exclude: ["password", "email_verified", "confirm_token", "remember_token"] },
        }).then((user) => {
          done(null, user);
        }).catch((error) => {
          return res.json({
            status: 500,
            error: "1 " + error,
          });
        });
      },
      (user, done) => {
        if (user) {
          model.likes.findOne({
            where: { user_id: user.id, product_id: product_id }
          }).then((like) => {
            done(null, user, like);
          }).catch((error) => {
            return res.json({
              status: 500,
              error: "2 " + error,
            });
          });
        } else {
          return res.json({
            status: 444,
            success: false,
            error: "User not found"
          })
        }
      },
      (user, like, done) => {
        if (like) {
          model.likes.destroy({
            where: { user_id: user.id, product_id: product_id }
          }).then((v) => {
            done(user, like);
          }).catch((error) => {
            return res.json({
              status: 500,
              error: "3 " + error,
            });
          });
        } else {
          model.likes.create({
            user_id: user.id,
            product_id: product_id,
            created_at: date.getTime()
          }).then((like) => {
            done(user, like);
          }).catch((error) => {
            return res.json({
              status: 500,
              error: "4 " + error,
            });
          });
        }
      }
    ], (user, like) => {
      return res.json({
        status: 200,
        success: true,
        data: "Like or dislike"
      })
    });

  },

  //Ajouter un bien
  store: (req, res) => {
    let description = req.body.description;
    let libelle = req.body.libelle;
    let owners_number = req.body.owners_number;
    let price = req.body.price;
    let priceBy = req.body.price_by;
    let info = req.body.info;
    let visitPrice = req.body.visit_price;
    let commission = req.body.commission;
    let bail = req.body.bail;
    let currency = req.body.currency;
    let count_piece = req.body.piece;
    let count_bedroom = req.body.bedroom != null ? parseInt(req.body.bedroom) : null;
    let count_kitchen = req.body.kitchen != null ? parseInt(req.body.kitchen) : null;
    let count_livingroom = req.body.livingroom != null ? parseInt(req.body.livingroom) : null;
    let count_bathroom = req.body.bathroom != null ? parseInt(req.body.bathroom) : null;
    let pro_area = req.body.pro_area;
    let unity = req.body.area_unity;
    let other = req.body.other;
    let condition_id = req.body.condition;
    let pro_inline = req.body.inline;
    let categorie_id = req.body.categorie;
    let type = req.body.type;
    let countrie_id = req.body.country;
    let municipalitie_id = req.body.municipalitie;
    let district_id = req.body.district;
    let citie_id = req.body.city;

    const media = req.files != null ? req.files : [];
    let hearderAuth = req.headers["authorization"];
    let user = jwtUtils.getUser(hearderAuth);
    //const baseURL = `${req.protocol}://192.168.43.194:8088${config.base_url}/`;
    const baseURL = "";
    //console.log("File media xxxxxxxxxxxxxxxxx ", media)

    //Validation
    if (description == "" || media.length == 0, price == null || price < 0) {

      return res.json({
        status: 400,
        error: "missing post element",
      });
    }

    let transaction;

    iAsync.waterfall(
      [
        (done) => {
          model.sequelize
            .transaction()
            .then((_transaction) => {
              transaction = _transaction;
              done(null, transaction);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                success: false,
                error: "" + err
              })
            });
        },
        (transaction, done) => {
          //Vérifie l'utilisateur
          model.users
            .findOne(
              {
                attributes: { exclude: ["password", "email_verified", "confirm_token", "role_slog", "remember_token"] },
                where: { id: user.userId, phone: user.userPhone },
              },
              { transaction }
            )
            .then((_user) => {
              done(null, transaction, _user);
            })
            .catch((err) => {

              return res.json({
                status: 500,
                error: "Internal Server Error " + err,
              });
              //done(err, transaction);
            });
        },
        (transaction, _user, done) => {
          if (_user) {
            model.companies.findOne({
              where: { user_id: _user.id }
            }).then((_company) => {
              done(null, transaction, _user, _company);
            }).catch((err) => {
              return res.json({
                status: 500,
                error: "Internal Server Error " + err,
              });
            })
          } else {
            return res.status(200).json({
              status: 444,
              success: false,
              error: 'user not found'
            });
          }
        }, (transaction, _user, _company, done) => {
          model.types.findOne({
            attributes: ["id"],
            where: { type_slog: type }
          }).then((_type) => {
            done(null, transaction, _user, _company, _type);
          }).catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "" + err
            });
          })
        },
        (transaction, _user, _company, _type, done) => {
          if (_company) {
            if (_type) {
              model.products
                .create(
                  {
                    pro_name: libelle,
                    pro_info: info,
                    pro_price: price,
                    pro_price_by: priceBy,
                    pro_bail: bail,
                    owners_number: owners_number != "" ? owners_number : null,
                    pro_visit_price: visitPrice,
                    pro_commission: commission,
                    pro_description: description,
                    count_piece: count_piece,
                    pro_enable: 1,
                    visibility: 5,
                    pro_currency: currency,
                    count_bedroom: count_bedroom,
                    count_kitchen: count_kitchen,
                    count_livingroom: count_livingroom,
                    count_bathroom: count_bathroom,
                    other: other,
                    pro_area: pro_area,
                    area_unity: unity,
                    pro_status: 1,
                    pro_inline: pro_inline,
                    user_id: _user.id,
                    categorie_id: categorie_id,
                    type_id: _type.id,
                    municipalitie_id: municipalitie_id,
                    district_id: district_id,
                    citie_id: citie_id,
                    companie_id: _company.id,
                    countrie_id: countrie_id,
                    condition_id: condition_id,
                    created_at: date.getTime(),
                    updated_at: date.getTime(),
                    editable: helper.productEditableLenght(),
                  },
                  { transaction }
                )
                .then((product) => {

                  done(null, transaction, product);
                })
                .catch((err) => {

                  return res.json({
                    status: 500,
                    error: "Internal Server Error product" + err,
                  });
                });

            } else {
              return res.json({
                status: 430,
                success: false,
                error: 'Type not found'
              });
            }
          } else {
            return res.status(200).json({
              status: 444,
              success: false,
              error: 'company not found'
            });
          }
        }, (transaction, product, done) => {
          if (product) {
            let uniqueCode = uniqueId.generateUniqueIdentifier(product.id, 5);
            model.product_identifies.create({
              identify: uniqueCode,
              product_id: product.id
            }, { transaction })
              .then((_) => {
                done(null, transaction, product);
              })
              .catch((error) => {
                return res.json({
                  status: 500,
                  error: "+" + error,
                });
              })
          } else {
            return res.json({
              status: 404,
              error: "Product not found x"
            });
          }
        },
        (transaction, product, done) => {
          if (product) {
            const promesse = media.map((file) => {
              if (file.fieldname == "media") {
                const imagePath = baseURL + file.path;
                return model.folders.create(
                  {
                    folders_url: imagePath,
                    folders_first: 0,
                    folders_status: 1,
                    created_at: date.getTime(),
                    updated_at: date.getTime(),
                    product_id: product.id,
                  },
                  { transaction }
                );
              }

            });
            Promise.all(promesse)
              .then((images) => {
                done(null, transaction, product, images);
              })
              .catch((err) => {

                return res.json({
                  status: 500,
                  error: "Internal Server Error " + err,
                });
              });
          } else {
            return res.json({
              status: 404,
              error: "Product not found x"
            });
          }
        }, (transaction, product, images, done) => {
          //console.log("Produit   xxxxxxxxxxxxxx", product);
          if (product) {
            model.subscriptions.findOne(
              { where: { user_id: user.userId } },
              { transaction }).then((subscription) => {
                if (subscription) {
                  if (subscription.s_number_of_properties > 0) {
                    subscription.s_number_of_properties -= 1;
                    subscription.updated_at = date.getTime();
                    subscription.save();
                  } else {
                    return res.json({
                      status: 603,
                      error: "Expired subscription",
                      success: false
                    })
                  }

                } else {
                  return res.json({
                    status: 404,
                    error: "Subscription not found"
                  });
                }
                done(null, transaction, images, product, subscription);
              }).catch((error) => {
                //console.log("Subscription eror  xxxxxxxxxxxxxx ", error);
                return res.json({
                  status: 500,
                  error: "sds".error
                })
              });
          } else {
            return res.json({
              status: 404,
              error: "Product not found"
            });
          }
        }, (transaction, images, product, subscription, done) => {
          if (subscription) {

            model.action_of_properties.create({
              action: "store",
              created_at: date.getTime(),
              number_of_remaining_properties: subscription.s_number_of_properties,
              subscription_id: subscription.id,
              companie_id: product.companie_id,
              product_id: product.id
            }, { transaction }).then((action) => {
              done(transaction, images, product, subscription)
            }).catch((error) => {
              console.log("action_of_properties eror  xxxxxxxxxxxxxx ", error);
              return res.json({
                status: 500,
                error: "".error
              })
            });


          } else {
            return res.json({
              status: 404,
              error: "Subscription not found"
            });
          }
        },
      ], (transaction, images, product) => {

        transaction
          .commit()
          .then(() => {
            const lastImage = images[images.length - 1];
            return res.json({
              status: 200,
              data: "created successfully",
              success: true,
            });
          })
          .catch(async (commitErr) => {
            await transaction.rollback();
            //console.error("Commit erroraaaaaaaaaaa:", commitErr);
            return res.json({
              status: 500,
              error: "Internal Server Error " + commitErr,
            });
          });
      }
    );
  },

  //Modifier un post
  update: (req, res) => {
    let description = req.body.description;
    let libelle = req.body.libelle;
    let owners_number = req.body.owners_number;
    let info = req.body.info;
    let priceBy = req.body.price_by;
    let price = parseInt(req.body.price);
    let visitPrice = req.body.visit_price != null ? parseInt(req.body.visit_price) : null;
    let commission = req.body.commission != null ? parseInt(req.body.commission) : null;
    let bail = req.body.bail ? parseInt(req.body.bail) : null;
    let currency = req.body.currency;
    let count_piece = req.body.piece;
    let count_bedroom = req.body.bedroom;
    let count_kitchen = req.body.kitchen;
    let count_livingroom = req.body.livingroom;
    let count_bathroom = req.body.bathroom;
    let pro_area = req.body.area;
    let other = req.body.other;
    let condition_id = req.body.condition;
    let pro_inline = req.body.inline;
    let categorie_id = req.body.categorie;
    let countrie_id = req.body.country;
    let municipalitie_id = req.body.municipalitie;
    let district_id = req.body.district;
    let citie_id = req.body.city;
    let companie_id = req.body.company;

    /*let hearderAuth = req.headers['authorization'];
        let userId = jwtUtils.getUserId(hearderAuth);*/
    if (description == "", price == null || price < 0) {
      return res.json({
        status: 400,
        error: "missing post element",
      });
    }
    let transaction;

    iAsync.waterfall(
      [
        (done) => {
          model.products.findOne({
            where: { id: req.params.realestate_id },
          }).then((_product) => {
            done(null, _product);
          }).catch((err) => {
            return res.json({
              status: 500,
              error: "Found product error" + err,
            });
          });
        }, (_product, done) => {
          model.sequelize.transaction()
            .then((_transaction) => {
              transaction = _transaction;
              done(null, _product, transaction);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                success: false,
                error: "Transaction erro " + err
              })
            });
        }, (_product, transaction, done) => {
          if (_product) {
            try {
              //console.log("vcxxxxxxxxxxxx ", owners_number);
              _product.pro_name = libelle;
              _product.pro_info = info;
              _product.pro_price = price;

              _product.pro_price_by = priceBy ?? "";
              _product.owners_number = owners_number != "" ? owners_number : null;

              _product.pro_bail = bail;

              _product.pro_visit_price = visitPrice;
              _product.pro_commission = commission;
              _product.pro_description = description;
              if (count_piece) {
                _product.count_piece = count_piece;
              }
              _product.pro_currency = currency;

              if (count_bedroom && count_kitchen && count_livingroom && count_bathroom) {
                _product.count_bedroom = count_bedroom;
                _product.count_kitchen = count_kitchen;
                _product.count_livingroom = count_livingroom;
                _product.count_bathroom = count_bathroom == "" ? 0 : count_bathroom;
              }
              _product.othe = other;
              if (pro_area) {
                _product.pro_area = pro_area;
              }

              _product.categorie_id = categorie_id;
              _product.municipalitie_id = municipalitie_id;
              _product.district_id = district_id;
              _product.citie_id = citie_id;
              _product.countrie_id = countrie_id;
              _product.condition_id = condition_id;
              _product.updated_at = date.getTime();

              _product.save({ transaction: transaction });

              done(null, _product, transaction);

            } catch (error) {
              return res.json({
                status: 500,
                error: "Update product error: " + error,
              });
            }

          } else {
            return res.json({
              status: 404,
              error: "product not found",
            });
          }
        }, (_product, transaction, done) => {
          model.subscriptions.findOne(
            { where: { user_id: _product.user_id } },
            { transaction: transaction }).then(async (subscription) => {
              if (subscription) {
                try {
                  if (subscription.s_number_of_properties > 0) {

                    subscription.s_number_of_properties -= 1;
                    subscription.updated_at = date.getTime();

                    subscription.save({ transaction: transaction });

                    done(null, _product, transaction, subscription);
                  } else {
                    return res.json({
                      status: 603,
                      error: "Expired subscription",
                      success: false
                    })
                  }
                } catch (error) {
                  await transaction.rollback();
                  return res.json({
                    status: 500,
                    error: "Update subscription try catch error " + error
                  });
                }
              } else {
                return res.json({
                  status: 404,
                  error: "Subscription not found"
                });
              }
            }).catch((error) => {
              return res.json({
                status: 500,
                error: "Update subscription err: ".error
              })
            });
        }, (_product, transaction, _subscription, done) => {

          model.action_of_properties.create({
            action: "Upated realestate",
            created_at: date.getTime(),
            number_of_remaining_properties: _subscription.s_number_of_properties - 1,
            subscription_id: _subscription.id,
            companie_id: _product.companie_id,
            product_id: _product.id
          }, { transaction: transaction }).then((action) => {
            done(_product, transaction, _subscription, action)
          }).catch((error) => {

            return res.json({
              status: 500,
              error: "Action error".error
            })
          });
        }
      ],
      async (_product, transaction, _subscription, action) => {
        if (_product && _subscription) {
          try {
            await transaction
              .commit();
            return res.json({
              status: 200,
              data: "Product updated",
              success: true,
            });
          } catch (error) {
            await transaction.rollback();
            return res.json({
              status: 500,
              success: false,
              error: "" + err
            });
          }
        } else {
          return res.json({
            state: 500,
            success: false,
            error: "Unconnu problem"
          });
        }


      }
    );
  },

  deleteImage: (req, res) => {
    let imageId = req.params.id;

    model.folders.destroy({
      where: { id: imageId }
    }).then((_deleted) => {
      return res.json({
        status: 200,
        success: true,
        data: "Deleted"
      })
    }).catch((error) => {
      res.json({
        status: 500,
        success: false,
        error: "" + error
      })
    })
  },

  realStateOption: (req, res) => {
    const type_slog = req.body.type_slog;

    iAsync.waterfall(
      [
        (done) => {
          if (type_slog != null) {
            model.categories
              .findAll({
                where: { cat_status: 1, type_slog: type_slog },
              })
              .then((categories) => {

                done(null, categories);
              })
              .catch((error) => {
                return res.json({
                  status: 500,
                  error: "" + error,
                });
              });
          } else {
            model.categories
              .findAll({
                where: { cat_status: 1 },
              })
              .then((categories) => {

                done(null, categories);
              })
              .catch((error) => {
                return res.json({
                  status: 500,
                  error: "" + error,
                });
              });
          }

        },
        (categories, done) => {
          model.conditions
            .findAll()
            .then((conditions) => {
              done(null, categories, conditions);
            })
            .catch((error) => {
              return res.json({
                status: 500,
                error: "" + error,
              });
            });
        },
        (categories, conditions, done) => {
          model.countries
            .findAll({
              where: [
                { countries_status: 1 },
                {
                  countries_currency: {
                    [Op.ne]: null
                  }
                }
              ],
              include: {
                model: model.cities,
                where: { c_status: 1 },
                required: false,
                include: {
                  model: model.municipalities,
                  where: { mu_status: 1 },
                  required: false,
                },
              },
            })
            .then((countries) => {
              done(null, categories, conditions, countries);
            })
            .catch((error) => {
              return res.json({
                status: 500,
                error: "" + error,
              });
            });
        }, (categories, conditions, countries, done) => {
          model.types.findAll({
            where: { type_status: 1 },
            include: [{ model: model.categories }]
          })
            .then((types) => {
              done(categories, conditions, countries, types);
            })
            .catch((error) => {
              return res.json({
                status: 500,
                error: "" + error,
              });
            })
        }
      ],
      (categories, conditions, countries, types) => {
        if (categories && conditions && countries) {
          return res.status(200).json({
            status: 200,
            categories: categories ?? [],
            conditions: conditions ?? [],
            countries: countries ?? [],
            types: types ?? []
          });
        } else {
          return res.json({
            status: 404,
            error: "Elements mssed"
          })
        }

      }
    );
  },

  addNewImage: (req, res) => {
    const realestate_id = req.params.id;
    const media = req.files;

    let transaction;
    iAsync.waterfall([
      (done) => {
        model.sequelize.transaction()
          .then((_transaction) => {
            transaction = _transaction;
            done(null, _transaction);
          }).catch((err) => {
            return res.json({
              status: 500,
              success: false,
              error: "Transaction erro " + err
            })
          });
      }, (transaction, done) => {
        model.products.findOne({
          where: { id: realestate_id },
        }).then((_product) => {
          done(null, transaction, _product);
        }).catch((err) => {
          return res.json({
            status: 500,
            success: false,
            error: "Found product error" + err,
          });
        });
      }, (transaction, _product, done) => {
        if (_product) {
          const promesse = media.map((file) => {
            if (file.fieldname == "newmedia") {
              const imagePath = file.path;
              return model.folders.create(
                {
                  folders_url: imagePath,
                  folders_first: 0,
                  folders_status: 1,
                  created_at: date.getTime(),
                  updated_at: date.getTime(),
                  product_id: _product.id,
                },
                { transaction }
              );
            }

          });
          Promise.all(promesse)
            .then((images) => {
              done(transaction, _product);
            })
            .catch((err) => {
              return res.json({
                status: 500,
                success: false,
                error: "Internal Server Error " + err,
              });
            });
        } else {
          return res.json({
            status: 404,
            success: false,
            error: "Product not found x"
          });
        }
      }
    ], async (transaction, _product) => {

      try {
        await transaction
          .commit();
        const _folders = await model.folders.findAll({
          where: { product_id: realestate_id },
        });
        return res.json({
          status: 200,
          folders: _folders,
          success: true,
        });
      } catch (error) {
        await transaction.rollback();
        return res.json({
          status: 500,
          success: false,
          error: "" + err
        });
      }
    })

  },

  search: (req, res) => {
    const keyword = req.body.keyword;
    const type = req.body.type;
    const condition = req.body.condition;
    const category = req.body.categorie;
    const country = req.body.country;
    const city = req.body.city;
    const municipality = req.body.municipality;
    //Resulat de la recherche
    let results = {
      searchs: [],
      suggestions: []
    };

    let where = { pro_inline: 1 };
    if (keyword) where.pro_name = { [Sequelize.Op.like]: `%${keyword}%` };
    if (type) where.type_id = type;
    if (condition) where.condition_id = condition;
    if (country) where.countrie_id = country;
    if (category) where.categorie_id = category;
    /* if(city && city > 0) where.citie_id = city;
    if(municipality && municipality > 0) where.municipalitie_id = municipality;
 */
    //return res.json({ss: where});
    iAsync.waterfall([
      (done) => {
        model.products.findAll({
          where: where,
          order: [["id", "DESC"]],
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
            { model: model.product_identifies },
            { model: model.cities },
            { model: model.municipalities },
            { model: model.districts },
            { model: model.categories },
            {
              model: model.likes,
              required: false
            },
            { model: model.conditions },
            { model: model.companies },
            { model: model.types },

          ],
        }).then((_result) => {
          done(null, _result);
        }).catch((error) => {
          return res.json({
            status: 500,
            error: "" + error
          })
        });

      }, (_result, done) => {
        _result.map((e) => {
          if (city) {
            if (municipality) {
              if (e.municipalitie_id == municipality && e.citie_id == city) {
                results.searchs.push(e);
              } else {
                results.suggestions.push(e)
              }
            } else if (e.citie_id == city) {
              results.searchs.push(e);
            } else {
              results.suggestions.push(e);
            }

          } else {
            results.searchs.push(e);
          }

        });
        done(_result, results);
      }
    ], (_result, results) => {
      return res.json({
        status: 200,
        products: results
      })
    })
  }
};
