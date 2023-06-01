const { Users, Carts, Business, Roles } = require('../models');

class UserServices {
  static async createUser({ user, business }) {
    try {
      const userCreated = await Users.create(user);
      const cart = await Carts.create({ userId: userCreated.id });
      let businessCreated = null;
      if (business && !user.isClientFinal) businessCreated = await Business.create({ ...business, userId: userCreated.id });

      return { userCreated, cart, businessCreated };
    } catch (error) {
      throw error;
    }
  }
  static async getUserById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ['password', 'role_id', 'roleId', 'createdAt', 'updatedAt']
        },
        include: [
          {
            model: Carts,
            as: 'shoppingCart',
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'user_id', 'userId']
            }
          },
          {
            model: Roles,
            as: 'role',
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'category_id', 'categoryId']
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
      return { message: 'Verificación exitosa' };
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
      const promises = [Users.destroy({ where: { id } }), Cart.destroy({ where: { userId: id } }), Products.destroy({ where: { userId: id } }), Business.destroy({ where: { userId: id } }), Order.destroy({ where: { userId: id } })];

      await Promise.all(promises);
      return { message: 'Usuario eliminador exitosamente' };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
