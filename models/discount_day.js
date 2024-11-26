const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DiscountDay = sequelize.define('DiscountDay', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bank_id: {
    type: DataTypes.INTEGER,
  },
  discount_days: {
    type: DataTypes.JSON,
  },
}, {
  timestamps: false,
});

module.exports = DiscountDay;
