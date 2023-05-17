const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Orders = db.define('orders', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  totalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'total_price',
    defaultValue: 0
  },
  status: {
    type: DataTypes.ENUM('accepted', 'rejected', 'finished'),
    allowNull: false
  }
});

module.exports = Orders;
