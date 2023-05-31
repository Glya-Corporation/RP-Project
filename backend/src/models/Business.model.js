const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Business = db.define('business', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  coin: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '$'
  },
  closingTime: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'closing_time'
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    allowNull: false,
    defaultValue: 'active'
  }
});

module.exports = Business;
