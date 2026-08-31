"ADMIN strict"

module.exports =  (sequelize,DataTypes)=>{
    const Admin = sequelize.define("admins",{
        id: {
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true
		},
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        birth: DataTypes.DATE,
        adm_enable: DataTypes.BOOLEAN,
        identifier: DataTypes.STRING,
        role: DataTypes.STRING
    },{
		timestamps: false
	});

    return Admin;
}