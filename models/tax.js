const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Tax = sequelize.define('Tax', {
  tax_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING(255) },
  rate: { type: DataTypes.DECIMAL(5, 2) },
  status: { type: DataTypes.ENUM('active', 'inactive'), defaultValue: 'active' },
});

module.exports = Tax;
