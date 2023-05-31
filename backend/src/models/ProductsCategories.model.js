const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const ProductsCategories = db.define('products_categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: DataTypes.STRING
  }
});

module.exports = ProductsCategories;
