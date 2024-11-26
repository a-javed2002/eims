const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const LoanType = sequelize.define('LoanType', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.STRING(255),
  },
}, {
  timestamps: false,
});

module.exports = LoanType;
