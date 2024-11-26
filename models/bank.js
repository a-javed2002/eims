const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Bank = sequelize.define('Bank', {
  bank_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
  },
}, {
  timestamps: false,
});

module.exports = Bank;
