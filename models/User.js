module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        userType: {
            type: DataTypes.ENUM,
            values: ['Parent', 'Child']
        }
    }, {
        freezeTableName: true
    });
    // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    
    User.associate = function (models) {
        User.belongsTo(models.RegisteredUser)
    };
    return User;
}