'use strict';

module.exports = function (sequelize, Sequelize) {
  const User = sequelize.define('ERS_USERS', {
    ERS_USERS_ID: {
      type: Sequelize.INTEGER,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    ERS_USERNAME: {
      type: Sequelize.STRING
    },
    ERS_PASSWORD: {
      type: Sequelize.STRING
    },
    USER_FIRST_NAME: {
      type: Sequelize.STRING
    },
    USER_LAST_NAME: {
      type: Sequelize.STRING
    },
    USER_EMAIL: {
      type: Sequelize.STRING
    },
    USER_ROLE_ID: {
      type: Sequelize.INTEGER
    }
  }, 
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    });
    return User;
};
