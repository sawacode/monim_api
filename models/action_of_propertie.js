module.exports = (sequelize, DataTypes)=>{
	const ActionOfPropertie = sequelize.define("action_of_properties",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		action: DataTypes.STRING,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		number_of_remaining_properties: DataTypes.INTEGER,
		subscription_id: DataTypes.BIGINT,
		companie_id: DataTypes.BIGINT,
		product_id: DataTypes.BIGINT

	},{timestamps:false});

	ActionOfPropertie.associate = (model)=>{
		ActionOfPropertie.belongsTo(model.products,{
			foreignKey: "product_id",
			contraints: false
		});

		ActionOfPropertie.belongsTo(model.companies,{
			foreignKey: "companie_id",
			contraints: false
		});

		ActionOfPropertie.belongsTo(model.subscriptions,{
			foreignKey: "subscription_id",
			contraints: false
		});
	}
	return ActionOfPropertie;
}