
module.exports = (sequelize, DataTypes)=>{
	const Subscription = sequelize.define("subscriptions", {
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		subscription_price: DataTypes.INTEGER,
		subscription_deadline: DataTypes.INTEGER,
		subscription_status: DataTypes.BOOLEAN,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		subscription_start : DataTypes.DATE,
		pack_subscription_id: DataTypes.BIGINT,
		companie_id: DataTypes.BIGINT,
		countrie_id: DataTypes.BIGINT,
		s_number_of_properties: DataTypes.INTEGER,
		s_pack_type: DataTypes.STRING,
		deadline_editable: DataTypes.INTEGER,
		user_id: DataTypes.BIGINT

	},{timestamps: false});

	Subscription.associate = (model)=>{
		Subscription.belongsTo(model.users, {
			foreignKey: "user_id",
			contraints: true,
		});

		Subscription.belongsTo(model.companies, {
			foreignKey: "companie_id",
			contraints: true
		});

		Subscription.belongsTo(model.countries,{
			foreignKey: "countrie_id",
			contraints: false
		});
	}


	return Subscription;
}