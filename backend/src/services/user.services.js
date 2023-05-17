const { Users } = require('../models');

class UserServices {
  static async createUser(datos) {
    try {
      const {
        username, email, password, roleId, imgProfile,
        nameBusiness, coin, cosingTime, city, address, nit
      } = datos;

      const user = await Users.create({ username, email, password, roleId, imgProfile });
      const business = await Business.create({ name: nameBusiness, coin, cosingTime, city, address, nit, userId: user.id });
      const cart = await Cart.create({userId: user.id})

      return { user, business, cart };
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ['password']
        },
        include: [
          {
            model: Roles,
            as: 'role',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
          {
            model: Cart,
            as: 'cart',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          },
          {
            model: Business,
            as: 'business',
            attributes: {
              exclude: ['createdAt', 'updatedAt']
            }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsersByRole() {
    try {
      const result = await Users.findAll({
        where: { roleId: id },
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        }
      });
    return result;
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, { username, imgProfile }) {
    try {
      await Users.update({ username, imgProfile }, { where: { id } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async verifyUser(id) {
    try {
      await Users.update({ isVerify: true }, { where: { id } });
      return { message: 'Usuario actualizado' };
    } catch (error) {
      throw error;
    }
  }
  static async updatePasswordUser(id, { oldPassword, password }) {
    try {
      const result = await Users.findByPk(id);
      // autenticate of the login
      return { message: 'Contraseña de usuario actualizada' };
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
      const promises = [
        Users.destroy({ where: { id } }),
        Cart.destroy({ where: { userId: id } }),
        Products.destroy({ where: { userId: id } }),
        Business.destroy({ where: { userId: id } }),
        Order.destroy({ where: { userId: id } })
      ];

      await Promise.all(promises);
      return { message: 'Usuario eliminador exitosamente' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
