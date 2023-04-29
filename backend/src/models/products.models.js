const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Products = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nameProduct: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "name"
    }, 
    code_product_by_merchants: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "code_merchants"
    },
    code_product_by_distibutor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "code_distributors"
    },
    code_product_by_wholesalers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "code_wholesalers"
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "stock",
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "created_by",
    },
    imageURL: {
      TYPE: DataTypes.STRING,
      allowNull: false,
      field: "image_url"
    }
  },
  {
    timestamps: true,
    updatedAt: true,
  }
);

module.exports = Products;