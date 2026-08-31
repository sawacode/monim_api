module.exports = (sequelize, DataTypes)=>{
	const PackSubscriionsHistories = sequelize.define("pack_subscription_histories",{
		id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
		price: DataTypes.STRING,
		start: DataTypes.DATE,
		deadline: DataTypes.INTEGER,
		wording: DataTypes.STRING,
		icon: DataTypes.STRING,
		status: DataTypes.BOOLEAN,
		type: DataTypes.STRING,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		subscription_id: DataTypes.BIGINT,
		pack_subscriptions_id: DataTypes.BIGINT,
		companie_id: DataTypes.BIGINT,
		user_id: DataTypes.BIGINT
	},{
		timestamps: false
	});

	PackSubscriionsHistories.associate= (model)=>{

		PackSubscriionsHistories.belongsTo(model.companies,{
			foreignKey: "companie_id",
			contraints: false
		});

		PackSubscriionsHistories.belongsTo(model.subscriptions,{
			foreignKey: "subscription_id",
			contraints: false
		});

		PackSubscriionsHistories.belongsTo(model.users,{
			foreignKey: "user_id",
			contraints: true
		});

		PackSubscriionsHistories.belongsTo(model.pack_subscriptions,{
			foreignKey: "pack_subscriptions_id",
			contraints: true
		});
	};
	return PackSubscriionsHistories;
}