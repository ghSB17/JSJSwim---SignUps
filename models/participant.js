//---------------class participant---------------------//
module.exports = function (sequelize, DataTypes) {
    var Class_participant =sequelize.define('Class_participant', {
      registration_date: {
        type: DataTypes.STRING
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

 