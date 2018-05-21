//---------------class participant---------------------//
module.exports = function (sequelize, DataTypes) {
    var Class_participant =sequelize.define('Class_participant', {
      ClassDescriptionId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      ClassInstanceId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      FamilyId:{
        type:DataTypes.STRING,
        allowNull:false
      },
      UserId:{
        type:DataTypes.INTEGER,
        allowNull:false
      },
      FullName:{
        type:DataTypes.STRING,
        allowNull:false
      }
    });
    return Class_participant;
};
  //   class_instance_ID VARCHAR(40),
  //   participant_ID VARCHAR(40), 
  //   -- above user id
  //   registration_date DATETIME, 
  //   active TINYINT DEFAULT 0,
  //   withdrawal_date DATETIME,
  //   parent_id VARCHAR(40) NULL,
  //   PRIMARY KEY (class_participant_id)
  //family ID/child ID and class instance. 

  //this will be made by merging together everything else.

 