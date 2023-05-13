const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const RolesCategories = db.define('roles_categories', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = RolesCategories;
