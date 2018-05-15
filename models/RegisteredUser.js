module.exports = function (sequelize, DataTypes) {

    var RegisteredUser = sequelize.define("RegisteredUser", {
        "ruId": {
            type: DataTypes.STRING.BINARY,
            allowNull: false,
            defaultValue:DataTypes.UUIDV1,
            primaryKey: true
        },
        "firstName": {
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
            validate: {
                is: ["^[a-zA-Z0-9]+$",'i']
            }
        },
        admin: {
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
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
            validate: {
                isAlpha: true
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[0-9-]+$",'i']
            }
        }

    }, {
        freezeTableName: true
    });
    RegisteredUser.associate = function (models) {
        RegisteredUser.hasMany(models.User)
    }
    return RegisteredUser;
}