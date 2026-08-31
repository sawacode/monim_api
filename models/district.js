"DISTRICT strict";

module.exports = (sequelize, DataTypes) => {
    const District = sequelize.define("districts",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },  
        dist_name: DataTypes.STRING,
        dist_status: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        municipalitie_id: DataTypes.BIGINT,
        countrie_id: DataTypes.BIGINT,
        citie_id: DataTypes.BIGINT,

    },
    {
        timestamps: false
     }
    );
  
    District.associate = (model)=>{
        District.belongsTo(model.countries, {
            foreignKey: 'countrie_id',
            contraints: true
        });
        District.belongsTo(model.cities,{
            foreignKey: "citie_id",
            contraints: true
        });
        District.belongsTo(model.municipalities,{
            foreignKey: "municipalitie_id",
            contraints: true
        });
    }

    return District;
}