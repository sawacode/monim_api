"PRODUCT strict";

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("products",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },  
        pro_name: DataTypes.STRING,
        pro_info: DataTypes.STRING,
        pro_price: DataTypes.STRING,
        pro_bail: DataTypes.STRING,
        pro_commission: DataTypes.STRING,
        pro_visit_price: DataTypes.STRING,
        pro_removed: DataTypes.BOOLEAN,
        pro_price_by: DataTypes.STRING,
        pro_currency: DataTypes.STRING,
        owners_number: DataTypes.STRING,
        pro_description: DataTypes.TEXT,
        count_piece: DataTypes.INTEGER,
        pro_enable: DataTypes.BOOLEAN,
        pro_area: DataTypes.STRING,
        liked: DataTypes.BOOLEAN,
        like_count: DataTypes.BIGINT,
        area_unity: DataTypes.STRING,
        visibility: DataTypes.TINYINT(3), // Visibilite des article
        count_bedroom: DataTypes.INTEGER,
        count_kitchen: DataTypes.INTEGER,
        count_livingroom: DataTypes.INTEGER,
        count_bathroom: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        other: DataTypes.STRING,
        pro_status: DataTypes.BOOLEAN,
        pro_inline:DataTypes.BOOLEAN,
        user_id: DataTypes.BIGINT,
        categorie_id: DataTypes.BIGINT,
        type_id: DataTypes.BIGINT,
        municipalitie_id: DataTypes.BIGINT,
        district_id: DataTypes.BIGINT,
        citie_id: DataTypes.BIGINT,
        companie_id: DataTypes.BIGINT,
        countrie_id: DataTypes.BIGINT,
        condition_id: DataTypes.BIGINT,
        editable: DataTypes.BOOLEAN,

    },
    {
        timestamps: false
     }
    );
  
    Product.associate = (model)=>{
        
        Product.hasMany(model.folders, {
            foreignKey: "product_id",
            contraints: false
        });
        Product.belongsTo(model.users, {
            foreignKey: "user_id",
            contraints: true
        });
        Product.belongsTo(model.types, {
            foreignKey: "type_id",
            contraints: true
        });
        Product.belongsTo(model.categories, {
            foreignKey: "categorie_id",
            contraints: true
        });
        Product.belongsTo(model.countries, {
            foreignKey: "countrie_id",
            contraints: true
        });
        Product.hasMany(model.likes, {
            foreignKey: "product_id",
            contraints: true
        });
        Product.belongsTo(model.cities, {
            foreignKey: "citie_id",
            contraints: true
        });
        Product.belongsTo(model.municipalities, {
            foreignKey: "municipalitie_id",
            contraints: true
        });
        Product.belongsTo(model.districts, {
            foreignKey: "district_id",
            contraints: true
        });
        Product.belongsTo(model.companies, {
            foreignKey: "companie_id",
            contraints: false
        });
        Product.belongsTo(model.conditions, {
            foreignKey: "condition_id",
            contraints: true
        });
        Product.hasMany(model.folders, {
            foreignKey: "product_id",
            contraints: true
        });
        Product.hasMany(model.favorites, {
            foreignKey: "product_id",
            contraints: true
        });

        Product.hasOne(model.product_identifies, {
            foreignKey: "product_id",
            contraints: false,
        });
        
    }

    return Product;
}