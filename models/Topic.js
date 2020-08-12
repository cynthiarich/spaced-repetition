module.exports = (sequelize, DataTypes) => {
    const Topic = sequelize.define("Topic", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Topic.associate = (models) => {
        Topic.hasMany(models.SubTopic, {
            onDelete: 'NO ACTION'
        })
        Topic.hasMany(models.UserTopic, {
            onDelete: 'NO ACTION'
        })
    }

    return Topic;
}