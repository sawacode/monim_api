'CURRENCY strict'

module.exports = (sequelize, DataTypes) => {

	//La tableu de configs (Confguration)
	const Currency = sequelize.define("currencies",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
			
		},
		devis: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
	},{
            timestamps: false
     });

	Currency.associate=(model)=>{
		Currency.hasMany(model.countries,{
			foreignKey: 'currencie_id',
			contraints: true
		});
	}

    return Currency;
}