module.exports = (sequelize, DataTypes)=>{
	const PromotionCode = sequelize.define("promotional_codes",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		code: DataTypes.INTEGER,
		usage_limit: DataTypes.INTEGER,
		end: DataTypes.DATE,
		value: DataTypes.INTEGER,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		user_id: DataTypes.BIGINT,
		status: DataTypes.BOOLEAN,
		number_of_time_used: DataTypes.INTEGER
	},{timestamps: false});

	PromotionCode.associate = (model)=>{
		PromotionCode.belongsTo(model.users, {
			foreignKey: "user_id",
			contraints: false
		});
	}

	return PromotionCode;
}