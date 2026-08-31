'COUNTRY strict'

module.exports = (sequelize, DataTypes) => {

	//La tableu de configs (Confguration)
	const Country = sequelize.define("countries",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
			
		},
		countries_name: DataTypes.STRING,
		number_size: DataTypes.INTEGER,
		countries_status: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        countries_flag: DataTypes.STRING,
        countries_code: DataTypes.STRING,
        countries_currency: DataTypes.STRING,
        slug : DataTypes.STRING
	},{
            timestamps: false
     });

	Country.associate=(model)=>{
		Country.hasMany(model.cities,{
			foreignKey: 'countrie_id',
			contraints: false
		});
		Country.hasMany(model.municipalities,{
			foreignKey: 'countrie_id',
			contraints: false
		});
		Country.hasMany(model.districts,{
			foreignKey: 'countrie_id',
			contraints: false
		});
		Country.hasMany(model.paiement_operators,{
			foreignKey: 'countrie_id',
			contraints: false
		});
		Country.hasMany(model.currencies,{
			foreignKey: 'currencie_id',
			contraints: true
		});
	}

    return Country;
}