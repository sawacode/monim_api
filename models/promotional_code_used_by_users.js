module.exports = (sequelize, DataTypes)=>{
	const PromotionCode = sequelize.define("promotional_code_used_by_users",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		promotional_code_id: DataTypes.BIGINT,
		company_id: DataTypes.BIGINT,
		user_id: DataTypes.BIGINT,
	},{timestamps: false});

	PromotionCode.associate = (model)=>{
		PromotionCode.belongsTo(model.users, {
			foreignKey: "user_id",
			contraints: false
		});
		PromotionCode.belongsTo(model.companies, {
			foreignKey: "company_id",
			contraints: false
		});
	}

	return PromotionCode;
}