const sequelize = require('sequelize');
const { Products } = require('../models');

class ProdustServices {
  static async createProducts(body) {
    try {
      const result = await Products.bulkBuild(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getProduct(id) {
    const result = await Products.findByPk(id);
    return result;
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllProducts() {
    try {
    } catch (error) {
      throw error;
    }
  }
  static async getAllProductsByBusinessId(id) {
    try {
      const result = await Business.findByPk(id, {
        attributes: ['name'],
        include: {
          model: Products,
          as: 'products',
          attributes: ['name', 'price', 'imgUrl', 'stock']
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateProductStock(id, stock) {
    try {
      await Products.update(
        {
          stock: sequelize.literal(`stock + ${stock}`)
        },
        { where: { id } }
      );
      return { message: 'Updated stock successful' };
    } catch (error) {
      throw error;
    }
  }
  static async updateProduct(id, body) {
    try {
      await Products.update(body, { where: { id } });
      return { message: 'Updated successful' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteProduct(id) {
    try {
      await Products.destroy({ where: { id } });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProdustServices;
