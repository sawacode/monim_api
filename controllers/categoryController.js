const { Op } = require("sequelize");
const iAsync = require('async');
const model = require('../models');

module.exports = {

  all: (req, res) => {
    iAsync.waterfall([
      (done) => {
        model.categories.findAll()
          .then((_categories) => {
            done(_categories);
          }).catch((err) => {
            return res.status(500).json({
              status: 500,
              error: "" + err
            });
          })
      }
    ], (_categories) => {
      if (_categories) {
        return res.status(200).json({
          status: 200,
          length: _categories.length,
          categories: _categories
        })
      } else {
        return res.status(201).json({
          status: 201,
          length: 0,
          categories: []
        })
      }

    });
  },
  productByCategorie: (req, res) => {
    const _limit = parseInt(req.params.limit) || 20;
    const categorie_id = req.params.categorie_id;
    const country_id = req.params.country_id;

    let option_where = { pro_inline:1, pro_enable:1,categorie_id: categorie_id }

    if (country_id != "null") option_where.countrie_id = country_id;
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
    model.products
      .findAll({
        limit: _limit+1,
        order: [["id", "DESC"]],
        where: option_where,
        include: [
          { model: model.categories },
          { model: model.folders },
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
          {
            model: model.likes,
            required: false
          },
          { model: model.product_identifies },
          { model: model.cities },
          { model: model.municipalities },
          { model: model.companies },
          {
            model: model.types
          },
          { model: model.districts },
          { model: model.conditions, },
        ],
      })
      .then((_products) => {
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
          length: _products.length,
          pagination: {
            hasMore: nextPage,
            nextCursor: cursor
          },
          products: _products,
          
        });
      })
      .catch((err) => {
        return res.status(200).json({
          status: 500,
          error: "" + err,
        });
      });
  }
}