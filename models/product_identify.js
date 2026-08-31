"PRODUCT_IDENTIFIES"

module.exports = (sequelize, DataTypes) => {
    const ProductIdentifies = sequelize.define("product_identifies",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        identify: DataTypes.STRING,
        product_id: DataTypes.BIGINT,
    },{
        timestamps: false
     });

    
    return ProductIdentifies;
}