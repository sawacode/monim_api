"FOLDER strict";

module.exports = (sequelize, DataTypes) => {
    const Folder = sequelize.define("folders",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },  
        folders_url: DataTypes.STRING,
        folders_status: DataTypes.BOOLEAN,
        folders_first: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        product_id: DataTypes.BIGINT,

    },
    {
        timestamps: false
     }
    );
  
    Folder.associate = (model)=>{
        Folder.belongsTo(model.products,{
            foreignKey: "product_id",
            contraints: true
        })
    }

    return Folder;
}