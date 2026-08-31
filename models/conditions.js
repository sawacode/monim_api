"CONDITIONS strict"

module.exports = (sequelize, DataTypes) =>{
	const Condition = sequelize.define("conditions",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		conditions_wording: DataTypes.STRING,
		conditions_status: DataTypes.BOOLEAN,
		conditions_icon: DataTypes.STRING,
		conditions_slog: DataTypes.STRING,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE
	},
    {
        timestamps: false
     }
	);

	Condition.associate = (model)=>{
		Condition.hasMany(model.products,{
			foreignKey: "condition_id",

		})
	}

	return Condition;
}