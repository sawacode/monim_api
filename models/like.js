"LIKES strict";

module.exports = (sequelize, DataTypes) => {
    const Like = sequelize.define("likes",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, 
        user_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        product_id: DataTypes.BIGINT,

    },
    {
        timestamps: false
     }
    );
  
    Like.associate = (model)=>{
        Like.belongsTo(model.products,{
            foreignKey: "product_id",
            contraints: true
        })
    }

    return Like;
}