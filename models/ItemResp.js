module.exports = (sequelize, DataTypes) => {
    const ItemResp = sequelize.define("ItemResp", {
        respStem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correct: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });

    ItemResp.associate = (models) => {
        ItemResp.belongsTo(models.Item)
        ItemResp.hasMany(models.UserSession, {
            onDelete: 'NO ACTION'
        });
    }
    
    return ItemResp;
}