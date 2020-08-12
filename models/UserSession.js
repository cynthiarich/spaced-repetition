module.exports = (sequelize, DataTypes) => {
    const UserSession = sequelize.define("UserSession", {
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "pending",
            values: ["pending", "complete", "skipped"]
        }
    });

    UserSession.associate = (models) => {
        UserSession.belongsTo(models.User)
        UserSession.belongsTo(models.Item)
        UserSession.belongsTo(models.ItemResp)
    }

    return UserSession;
}