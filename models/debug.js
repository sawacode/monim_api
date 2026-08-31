module.exports = (sequelize, DataTypes)=>{
	const  Debugs = sequelize.define("debugs",{
		id:{
			primaryKey: true,
			type: DataTypes.BIGINT,
			autoIncrement: true,
		},
		error: DataTypes.TEXT,
		created_at: DataTypes.DATE,
		updated_at: DataTypes.DATE,
		status: DataTypes.BOOLEAN
		
	},{timestamps: false});

	return Debugs;
}