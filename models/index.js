const sequelize = require('../config/db');
const Role = require('./role');
const User = require('./user');
const Tax = require('./tax');
const Category = require('./category');
const Product = require('./product');
const Warehouse = require('./warehouse');
const Customer = require('./customer');
const Supplier = require('./supplier');
const Inventory = require('./inventory');
const Order = require('./order');
const Payment = require('./payment');
const OrderItem = require('./order_item');
const LoanType = require('./loan_type');
const Loan = require('./loan');
const PricingParameter = require('./pricing_parameter');
const Bank = require('./bank');
const DiscountDay = require('./discount_day');
const Invoice = require('./invoice');
const Receipt = require('./receipt');
const FOCDeal = require('./foc_deal');
const DeviceConfiguration = require('./device_configuration');

// Define model associations
User.belongsTo(Role, { foreignKey: 'role_id' });
Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.belongsTo(Tax, { foreignKey: 'tax_id' });
Inventory.belongsTo(Product, { foreignKey: 'product_id' });
Inventory.belongsTo(Warehouse, { foreignKey: 'warehouse_id' });
Order.belongsTo(Customer, { foreignKey: 'customer_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });
Payment.belongsTo(Order, { foreignKey: 'order_id' });
Loan.belongsTo(LoanType, { foreignKey: 'lonetype_id' });
DiscountDay.belongsTo(Bank, { foreignKey: 'bank_id' });
Invoice.belongsTo(Customer, { foreignKey: 'customer_id' });
Receipt.belongsTo(Invoice, { foreignKey: 'invoice_id' });

// Export all models
module.exports = {
  sequelize,
  Role,
  User,
  Tax,
  Category,
  Product,
  Warehouse,
  Customer,
  Supplier,
  Inventory,
  Order,
  Payment,
  OrderItem,
  LoanType,
  Loan,
  PricingParameter,
  Bank,
  DiscountDay,
  Invoice,
  Receipt,
  FOCDeal,
  DeviceConfiguration,
};
