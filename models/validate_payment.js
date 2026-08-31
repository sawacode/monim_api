
module.exports = (sequelize, DataTypes)=>{
	const ValidatePaymentPlan = sequelize.define("validate_payments",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        status: DataTypes.INTEGER,
        company_id: DataTypes.BIGINT,
        admin_id: DataTypes.BIGINT,
        payment_request_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE

	},{timestamps: false});

	return ValidatePaymentPlan;
}