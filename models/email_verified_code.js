"EMAIL_VERIFIED_CODE strict"

module.exports = (sequelize, DataTypes)=>{
    const EmailVerifiedEmail = sequelize.define("email_verified_codes",{
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true,
        },
        email: DataTypes.STRING,
        code: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE

    }, {timestamps: false});

    return EmailVerifiedEmail;
}