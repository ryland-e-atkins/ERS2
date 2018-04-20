'use strict';

module.exports = function (sequelize, Sequelize) {
    const ReimbForm = sequelize.define('ERS_REIMBURSEMENT', {
    REIMB_ID: {
        type: Sequelize.INTEGER,
        notNull: true,
        primaryKey: true,
        autoIncrement: true
    },
    REIMB_AMOUNT: {
        type: Sequelize.FLOAT
    },
    REIMB_SUBMITTED: {
        type: Sequelize.DATE
    },
    REIMB_RESOLVED: {
        type: Sequelize.DATE
    },
    REIMB_DESCRIPTION: {
        type: Sequelize.STRING
    },
    REIMB_RECEIPT: {
        type: Sequelize.BLOB
    },
    REIMB_AUTHOR: {
        type: Sequelize.INTEGER
    },
    REIMB_RESOLVER: {
        type: Sequelize.INTEGER
    },
    REIMB_STATUS_ID: {
        type: Sequelize.INTEGER
    },
    REIMB_TYPE_ID: {
        type: Sequelize.INTEGER
    }
}, 
    {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false
    });
    return ReimbForm;
};
