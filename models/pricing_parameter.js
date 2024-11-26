const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const PricingParameter = sequelize.define('PricingParameter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  style_id: {
    type: DataTypes.STRING(255),
  },
  fabric: {
    type: DataTypes.STRING(255),
  },
  gender: {
    type: DataTypes.STRING(50),
  },
  xs: {
    type: DataTypes.DECIMAL(10, 2),
  },
  sm: {
    type: DataTypes.DECIMAL(10, 2),
  },
  md: {
    type: DataTypes.DECIMAL(10, 2),
  },
}, {
  timestamps: false,
});

module.exports = PricingParameter;
