const { Users } = require('../models');

class UserServices {
  static async createUser(datos) {
    try {
      const {
        username, email, password, dni, roleId, imgProfile,
        name, coin, cosingTime, city, address, nit
      } = datos;

      const user = await Users.create({ username, email, password, dni, roleId, imgProfile });
      const business = await Business.create({ name, coin, cosingTime, city, address, nit });

      return { user, business };
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
    } catch (error) {
      throw error;
    }
  }
  static async updateUser(id, { username, imgProfile, dni }) {
    try {
      await Users.update({ username, imgProfile, dni }, { where: { id } });
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
        Carts.destroy({ where: { id } }),
        Products.destroy({ where: { id } }),
        Business.destroy({ where: { id } }),
        Orders.destroy({ where: { id } })
      ];

      await Promise.all(promises);
      return { message: 'Usuario eliminador exitosamente' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
