'CONFIGS strict'

module.exports = (sequelize, Datatypes) => {

	//La tableu de configs (Confguration)
	const Config = sequelize.define("configurations",{
		id: {
			type: Datatypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		option: Datatypes.STRING,
		value: Datatypes.STRING,
		created_at: Datatypes.DATE,
		updated_at: Datatypes.DATE
	},{
            timestamps: false
     }
    );
    return Config;
}