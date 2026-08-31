module.exports = (sequelize, DataTypes)=>{
	const PaiementMethod = sequelize.define("paiement_operators",{
		 id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: DataTypes.STRING,
        logo: DataTypes.STRING,
        info: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        number_size: DataTypes.INTEGER,
        slug: DataTypes.STRING,
        contact1: DataTypes.STRING,
        contact2: DataTypes.STRING,
        countrie_id : DataTypes.BIGINT,
        country_slug: DataTypes.STRING
	}, {
		timestamps: false
	});

	PaiementMethod.associate = (model)=>{

		PaiementMethod.belongsTo(model.countries,{
			foreignKey : "countrie_id"
		});
	}

	return PaiementMethod;
}