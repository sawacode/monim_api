"TYPE strict"

module.exports = (sequelize, DataTypes)=>{
	const Type = sequelize.define("types",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		type_name: DataTypes.STRING,
		type_status: DataTypes.BOOLEAN,
		type_slog: DataTypes.STRING,
		type_image: DataTypes.STRING,
		created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
	},{
		timestamps: false
	});

	Type.associate = (model) => {
		Type.hasMany(model.products,{
			foreignKey: "type_id"
		}
	  );
	  Type.hasMany(model.categories,{
	  	foreignKey: "type_id"
	  });
	}

	return Type;
}