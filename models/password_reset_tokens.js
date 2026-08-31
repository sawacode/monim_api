module.exports = (sequelize, DataTypes)=>{
	const PasswordResetTokens = sequelize.define("password_reset_tokens",{
		id: {
			type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
		},
		email: DataTypes.STRING,
		token: DataTypes.STRING,
		created_at: DataTypes.DATE
	},{timestamps: false});

	return PasswordResetTokens;
}