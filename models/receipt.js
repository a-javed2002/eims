const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Receipt = sequelize.define('Receipt', {
  receipt_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  invoice_id: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  timestamps: false,
});

module.exports = Receipt;
