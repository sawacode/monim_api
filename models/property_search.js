module.exports = (sequelize, DataTypes)=>{
	const PropertySearch = sequelize.define("property_searchs",{
		id: {
	        type: DataTypes.BIGINT,
	        primaryKey: true,
	        autoIncrement: true
    	},
    	wording: DataTypes.STRING,
    	budget: DataTypes.INTEGER,
    	countrie_id: DataTypes.BIGINT,
    	currency: DataTypes.STRING,
    	type_id: DataTypes.BIGINT,
    	condition_id: DataTypes.BIGINT,
    	categorie_id: DataTypes.BIGINT,
		citie_id: DataTypes.BIGINT,
		municipalitie_id: DataTypes.BIGINT,
		user_id: DataTypes.BIGINT,
		status: DataTypes.BOOLEAN,
		created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE

	},{timestamps: false});

	PropertySearch.associate = (model)=>{
		PropertySearch.belongsTo(model.users,{
			foreignKey: "user_id",
			contraints: false
		});
		PropertySearch.belongsTo(model.countries,{
			foreignKey: "countrie_id",
			contraints: true
		});

		PropertySearch.belongsTo(model.cities,{
			foreignKey: "citie_id",
			contraints: false
		});

		PropertySearch.belongsTo(model.conditions,{
			foreignKey: "condition_id",
			contraints: false
		});
		PropertySearch.belongsTo(model.types,{
			foreignKey: "type_id",
			contraints: false
		});
		PropertySearch.belongsTo(model.categories,{
			foreignKey: "categorie_id",
			contraints: false
		});

		

		PropertySearch.belongsTo(model.municipalities,{
			foreignKey: "municipalitie_id",
			contraints: false
		});
	}

	return PropertySearch;

}