"FAVORITES strict";

module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define("favorites",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        product_id: DataTypes.BIGINT,
        user_id: DataTypes.BIGINT

    },
    {
        timestamps: false
     }
    );
  
    Favorite.associate = (model)=>{
        Favorite.belongsTo(model.products,{
            foreignKey: "product_id",
            contraints: true
        });

        Favorite.belongsTo(model.users,{
            foreignKey: "user_id",
            contraints: true
        })
    }
   

    return Favorite;
}