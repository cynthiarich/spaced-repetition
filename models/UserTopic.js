module.exports = (sequelize, DataTypes) => {
    const UserTopic = sequelize.define("UserTopic", {
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    UserTopic.associate = (models) => {
        UserTopic.belongsTo(models.User)
        UserTopic.belongsTo(models.Topic)
    }


    return UserTopic;
}