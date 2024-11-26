const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FOCDeal = sequelize.define('FOCDeal', {
  foc_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  deal_description: {
    type: DataTypes.STRING(255),
  },
}, {
  timestamps: false,
});

module.exports = FOCDeal;
