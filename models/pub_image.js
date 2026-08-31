
module.exports = (sequelize, DataTypes) => {
    const ImagePub =  sequelize.define("pub_images",{
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        }, 
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        page: DataTypes.STRING,
        order: DataTypes.STRING,
        inline: DataTypes.BOOLEAN,
        path: DataTypes.STRING,
        
    },{
        timestamps: false
     })

    return ImagePub;
}