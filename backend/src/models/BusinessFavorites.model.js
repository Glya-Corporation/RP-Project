const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const BusinessFavorites = db.define('business_favorites', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  }
});

module.exports = BusinessFavorites;
