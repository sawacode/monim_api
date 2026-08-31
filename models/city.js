'CITY strict';

module.exports = (sequelize, DataTypes) =>{

	const City = sequelize.define("cities",{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
			
		},
		c_name: DataTypes.STRING,
		c_status: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        countrie_id: DataTypes.BIGINT,

	},{
		timestamps: false
	});

	City.associate = (model)=>{
		City.belongsTo(model.countries,{
			foreignKey: "countrie_id",
			contraints: true,
		});

		City.hasMany(model.municipalities,{
			foreignKey: "citie_id",
			contraints: true,
		});

		City.hasMany(model.districts,{
			foreignKey: "citie_id",
			contraints: true,
		});

	}

	return City;
}