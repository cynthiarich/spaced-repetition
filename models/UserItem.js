module.exports = (sequelize, DataTypes) => {
    const UserItem = sequelize.define("UserItem", {
        rScore: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    UserItem.associate = (models) => {
        UserItem.belongsTo(models.User)
        UserItem.belongsTo(models.Item)
    }


    return UserItem;
}