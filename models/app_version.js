"APP_VERSION strict"

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("app_versions", {
        id: {
            primaryKey: true,
            type: DataTypes.BIGINT,
            autoIncrement: true
        },
        latest_version: DataTypes.STRING,
        minimum_required_version: DataTypes.STRING,
        update_url: DataTypes.STRING,
        force_update: DataTypes.BOOLEAN,
        release_notes: DataTypes.STRING,
    }, {
        timestamps: false   
    });

    return Admin;
}