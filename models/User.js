module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "user",
            values: ["admin", "author", "user"]
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        durationGoal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5,
            validate: {
                isNumeric: true
            }
        }
    });

    User.associate = (models) => {
        User.hasMany(models.Item, {
            onDelete: 'NO ACTION'
        }),
        User.hasMany(models.UserSession, {
            onDelete: 'NO ACTION'
        }),
        User.hasMany(models.UserTopic, {
            onDelete: 'NO ACTION'
        }),
        User.hasMany(models.UserItem, {
            onDelete: 'NO ACTION'
        })
    }

    return User;
}