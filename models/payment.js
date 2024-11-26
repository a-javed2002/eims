const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_id: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  method: {
    type: DataTypes.ENUM('cash', 'card'),
  },
  status: {
    type: DataTypes.ENUM('completed', 'failed'),
  },
}, {
  timestamps: false,
});

module.exports = Payment;
