//---------------class description---------------------//
module.exports = function (sequelize, DataTypes) {
    var Class_description = sequelize.define('Class_description', {
        class_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        age_min: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        age_max: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        length: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    Class_description.associate = function (models) {
        Class_description.hasMany(models.Class_instance, {
            foreignKey: {
                allowNull: false
              }
        });
    };
    return Class_description;
};
//class description needs to be associated with class instance. the class instance can have only 1 description. while class description can have MANY class instances.