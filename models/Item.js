module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        itemStem: {
            type: DataTypes.STRING,
            allowNull: false
        },
        public: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Item.associate = (models) => {
        Item.belongsTo(models.User)
        Item.belongsTo(models.SubTopic)
        Item.hasMany(models.ItemResp, {
            onDelete: 'CASCADE'
        })
        Item.hasMany(models.UserItem, {
            onDelete: 'CASCADE'
        });
        Item.hasMany(models.UserSession, {
            onDelete: 'NO ACTION'
        })
    }
    
    return Item;
}