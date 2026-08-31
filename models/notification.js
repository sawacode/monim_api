module.exports = (sequelize, DataTypes) =>{
	const Notification = sequelize.define('notifications',{
		id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        created_at: DataTypes.DATE,
        not_content: DataTypes.STRING,
        not_status: DataTypes.BOOLEAN,
        user_id: DataTypes.BIGINT
    },
    {
        timestamps: false
    }
    );

  return Notification;
}