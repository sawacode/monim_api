module.exports = (sequelize, DataTypes)=>{
	const PaymentRequest = sequelize.define("payment_requests",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        payer_number: DataTypes.STRING,
        receive_number: DataTypes.STRING,
        status: DataTypes.INTEGER,
        operator: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        value_to_add: DataTypes.INTEGER,
        pack_id: DataTypes.BIGINT,
        motif: DataTypes.STRING,
        image_request: DataTypes.STRING,
        currency: DataTypes.STRING,
        pack: DataTypes.STRING,
        icon: DataTypes.STRING,
        user_id: DataTypes.BIGINT,
        company_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        countries_id: DataTypes.BIGINT

	},{timestamps: false});

    PaymentRequest.associate = (model) => {
        PaymentRequest.belongsTo(model.users,{
            foreignKey: 'user_id',
            contraints: false
        })
    } 

	return PaymentRequest;
}