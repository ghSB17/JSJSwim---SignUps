var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {

    var RegisteredUser = sequelize.define("RegisteredUser", {
        "ruId": {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        "firstName": {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     is: ["^[a-zA-Z0-9]+$", 'i']
            // }
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     is: ["^[0-9-]+$", 'i']
            // }
        }

    }, {
        freezeTableName: true
    });
    RegisteredUser.associate = function (models) {
        RegisteredUser.hasMany(models.User)
    }
    RegisteredUser.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    RegisteredUser.hook("beforeCreate", function (registeredUser) {
        registeredUser.password = bcrypt.hashSync(registeredUser.password, bcrypt.genSaltSync(10), null);
    });
    return RegisteredUser;
}