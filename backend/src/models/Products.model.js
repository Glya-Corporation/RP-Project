const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
* @openapi
* components:
*   schemas:
*     Product:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The ID of the product
*         name:
*           type: string
*           description: The name of the product
*         price:
*           type: float
*           description: The price of the product
*         stock:
*           type: integer
*           description: The stock of the product
*         status:
*           type: string
*           description: The status of the product
*         imgUrl:
*           type: string
*           description: The picture of the product
*       example:
*         id: 1
*         name: 'Coca-cola'
*         price: 1.75
*         stock: 5
*         status: 'active'
*         imgUrl: 'https://imagen.png'
*     CreateProduct:
*       type: object
*       required:
*         - name
*         - price
*         - stock
*         - imgUrl
*       properties:
*         name:
*           type: string
*           description: The name of the product
*         price:
*           type: float
*           description: The price of the product
*         stock:
*           type: integer
*           description: The stock of the product
*         imgUrl:
*           type: string
*           description: The picture of the product
*       example:
*         name: 'Coca-cola'
*         price: 1.75
*         stock: 5
*         imgUrl: 'https://imagen.png'
*     AddProductStock:
*       type: object
*       required:
*         - stock
*       properties:
*         stock:
*           type: integer
*           description: The stock of the product
*       example:
*         stock: 5
*     UpdateProduct:
*       type: object
*       properties:
*         name:
*           type: string
*           description: The name of the product
*         price:
*           type: float
*           description: The price of the product
*         imgUrl:
*           type: string
*           description: The picture of the product
*       example:
*         name: 'Coca-cola'
*         price: 1.75
*         imgUrl: 'https://imagen.png'
*/

const Products = db.define('product', {
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
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active'
  },
  imgUrl: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    }
  }
});

module.exports = Products;
