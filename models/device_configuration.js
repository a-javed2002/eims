const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const DeviceConfiguration = sequelize.define('DeviceConfiguration', {
  device_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  config: {
    type: DataTypes.JSON,
  },
}, {
  timestamps: false,
});

module.exports = DeviceConfiguration;
