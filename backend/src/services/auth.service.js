const { Users, Cart } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AuthServices {
  static async login(credentials) {
    try {
      const { username, password } = credentials;
      const result = await Users.findOne({
        where: { username },
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        include: [
          {
            model: Cart,
            as: 'cart',
            attributes: ['id']
          },
          {
            model: Business,
            as: 'my business'
          },
          {
            model: Roles,
            as: 'role'
          }
        ]
      });
      if (result) {
        const isValid = bcrypt.compareSync(password, result.password);
        return isValid ? result : isValid;
      } else {
        return result;
      }
    } catch (error) {
      throw error;
    }
  }
  static generateToken(user) {
    try {
      const token = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: '24h',
        algorithm: 'HS512'
      });
      return token;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthServices;
