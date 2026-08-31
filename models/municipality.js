"MUNICIPALITY strict"

module.exports = (sequelize,DataTypes)=>{
	const Municipality = sequelize.define("municipalities",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		mu_name: DataTypes.STRING,
		mu_status: DataTypes.BOOLEAN,
		countrie_id: DataTypes.BIGINT,
		citie_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
	},
	{
		timestamps: false
	});

	Municipality.associate = (model)=>{
		
		Municipality.belongsTo(model.countries,{
			foreignKey: "countrie_id",
			contraints: true
		});
		Municipality.belongsTo(model.cities,{
			foreignKey: "citie_id",
			contraints: true
		});
	}
	return Municipality;
}
