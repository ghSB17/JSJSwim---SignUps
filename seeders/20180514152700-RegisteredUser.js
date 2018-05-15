'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('RegisteredUser', [{
      firstName:"alpha",
      lastName:"beta",
      email:"abc@abc.com",
      password:"abcd12341",
      address1:"address11",
      address2:"addr2",
      city:"city",
      state:"state",
      zipCode:"123456-102"
    },
    {
      firstName:"Sam",
      lastName:"smith",
      email:"sam@sam.com",
      password:"abcd12342",
      address1:"addr021",
      address2:"addr022",
      city:"city",
      state:"nj",
      zipCode:"90902-11"
    },
    {
      firstName:"Jim",
      lastName:"John",
      email:"jim@jim.com",
      password:"abcd123403",
      address1:"addr031",
      address2:"addr032",
      city:"city",
      state:"nj",
      zipCode:"90876-234"
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
