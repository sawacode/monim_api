
module.exports = (sequelize, DataTypes) => {
    const Histories =  sequelize.define("histories",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, 
        action: DataTypes.STRING,
        admin_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    },{
        timestamps: false
     })

    return Histories;
}