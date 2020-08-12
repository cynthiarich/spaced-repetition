module.exports = (sequelize, DataTypes) => {
    const SubTopic = sequelize.define("SubTopic", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    SubTopic.associate = (models) => {
        SubTopic.belongsTo(models.Topic)
        SubTopic.hasMany(models.Item, {
            onDelete: 'NO ACTION'
        })
    }

    return SubTopic;
}