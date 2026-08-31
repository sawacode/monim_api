"COMPANIE strict";

module.exports = (sequelize, DataTypes) => {
    const Companie = sequelize.define("companies",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        identifier: DataTypes.STRING,
        companie_name: DataTypes.STRING,
        companie_description: DataTypes.TEXT,
        companie_status: DataTypes.TINYINT,
        companie_slogan: DataTypes.STRING,
        companie_logo: DataTypes.STRING,
        countrie_id: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        user_id: DataTypes.BIGINT,

    },
    {
        timestamps: false
     }
    );
  
    Companie.associate = (model) =>{
        Companie.belongsTo(model.users,{
            foreignKey: "user_id",
            contraints: true,
        });

        Companie.hasOne(model.subscriptions,{
            foreignKey: "companie_id",
            contraints: true,
        })

        Companie.belongsTo(model.countries,{
            foreignKey: "countrie_id",
            contraints: true,
        });
    }


    return Companie;
}