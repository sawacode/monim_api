module.exports = (sequelize, DataTypes)=>{
	const PackSubscriions = sequelize.define("pack_subscriptions", {
		id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, 
        pack_price: DataTypes.INTEGER,
        pack_description: DataTypes.TEXT,
        pack_libele: DataTypes.STRING,
        pack_devis: DataTypes.INTEGER,
        pack_deadline: DataTypes.INTEGER,
        pack_type: DataTypes.STRING,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        image: DataTypes.STRING,
        pack_status: DataTypes.BOOLEAN,
        countrie_id: DataTypes.BIGINT,
        number_of_properties: DataTypes.INTEGER,
        deadline_editable: DataTypes.INTEGER,
        pack_slug: DataTypes.STRING,
        country_slug : DataTypes.STRING

       
	},{timestamps:false});

	 PackSubscriions.associate = (model)=>{
        	PackSubscriions.belongsTo(model.countries,{
        		foreignKey: "countrie_id",
        		contraints: false
        	});
        }

	return PackSubscriions;
}