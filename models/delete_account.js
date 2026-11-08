"DELETE_ACCOUNT strict"

module.exports =  (sequelize,DataTypes)=>{
    const Admin = sequelize.define("delete_accounts",{
        id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
        user_id: DataTypes.BIGINT,
        created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
    },{
		timestamps: false
	});

    return Admin;
}