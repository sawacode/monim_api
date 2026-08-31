'USER strict'

module.exports = (sequelize, DataTypes) => {
    
    const User = sequelize.define('users', {
            id: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true
            },
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: DataTypes.STRING,
            identify: DataTypes.STRING,
            password: DataTypes.STRING,
            phone: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            birth: DataTypes.DATE,
            confirm_token: DataTypes.STRING,
            role_slog: DataTypes.STRING,
            user_enable: DataTypes.BOOLEAN, //1=>Activer ; 0=> désactivé
            remember_token: DataTypes.STRING,
            status: DataTypes.INTEGER,
            email_verified_at: DataTypes.STRING,
            user_identity_card: DataTypes.STRING,
            avatar: DataTypes.STRING,
            countrie_id: DataTypes.BIGINT,
            citie_id: DataTypes.BIGINT,
            municipalitie_id: DataTypes.BIGINT,
            district_id: DataTypes.BIGINT,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE,

        },
         {
            timestamps: false
         }
    );
    User.associate = (model) => {
        User.hasMany(model.products, {
            foreignKey: 'user_id',
            contraints: false
        });
        User.belongsTo(model.countries, {
            foreignKey: 'countrie_id',
            contraints: true
        });
        User.belongsTo(model.cities,{
            foreignKey: "citie_id",
            contraints: true
        });
        User.belongsTo(model.municipalities,{
            foreignKey: "municipalitie_id",
            contraints: true
        });
        User.belongsTo(model.districts,{
            foreignKey: "district_id",
            contraints: true
        });
        User.hasOne(model.companies, {
            foreignKey: "user_id",
            contraints: false
        });
         User.hasMany(model.favorites, {
            foreignKey: "user_id",
            contraints: false
        });

        User.hasMany(model.payment_requests, {
            foreignKey: 'user_id',
            contraints: false
        });

    }
    return User;
}