module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
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