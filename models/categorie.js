"CATEGORIE strict"

module.exports = (sequelize,DataTypes)=>{
	const Categorie = sequelize.define("categories",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		cat_name: DataTypes.STRING,
		type_slog: DataTypes.STRING,
		type_id: DataTypes.BIGINT,
		cat_status: DataTypes.BOOLEAN,
		cat_image: DataTypes.STRING,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		slug: DataTypes.STRING
	},{
		timestamps: false
	});

	Categorie.associate = (model) => {
		Categorie.hasMany(model.products,{
			foreignKey: "categorie_id"
		}
	  );
	  Categorie.belongsTo(model.categories,{
	  	foreignKey: "type_id"
	  });
	}

	return Categorie;
}