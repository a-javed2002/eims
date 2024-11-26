const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Loan = sequelize.define('Loan', {
  loan_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  loan_sanc_date: {
    type: DataTypes.DATE,
  },
  emp_id: {
    type: DataTypes.BIGINT,
  },
  dept_id: {
    type: DataTypes.BIGINT,
  },
  desig_id: {
    type: DataTypes.BIGINT,
  },
  lonetype_id: {
    type: DataTypes.BIGINT,
  },
  loan_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  monthly_inst_amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  no_of_installments: {
    type: DataTypes.INTEGER,
  },
  is_open: {
    type: DataTypes.CHAR(1),
  },
  remarks: {
    type: DataTypes.STRING(255),
  },
}, {
  timestamps: false,
});

module.exports = Loan;
