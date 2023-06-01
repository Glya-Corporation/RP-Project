const db = require('../utils/database');
const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The ID of the User.
 *         fullName:
 *           type: string
 *           description: The full name of the User.
 *         username:
 *           type: string
 *           description: The username.
 *         email:
 *           type: string
 *           format: email
 *           description: The email of the User.
 *         password:
 *           type: string
 *           description: The password of the User.
 *         imgProfile:
 *           type: string
 *           description: The photo of the User.
 *         number:
 *           type: string
 *           description: The number of the User.
 *         roleId:
 *           type: integer
 *           description: The role of the User.
 *         isVerify:
 *           type: boolean
 *           description: The status of the User.
 *       example:
 *         id: 1
 *         fullName: 'luis uzcateguiu'
 *         username: 'User123'
 *         email: 'correo@email.com'
 *         password: 'abc123'
 *         imgProfile: 'file of the photo'
 *         number: '+1239876543210'
 *         roleId: 1
 *         isVerify: false
 *     CreateUser:
 *       type: object
 *       required:
 *         - user
 *       properties:
 *         user:
 *           type: object
 *           required:
 *             - fullName
 *             - username
 *             - email
 *             - password
 *             - number
 *             - dni
 *             - roleId
 *           properties:
 *             fullName:
 *               type: string
 *               description: The full name of the User.
 *             username:
 *               type: string
 *               description: The username.
 *             email:
 *               type: string
 *               format: email
 *               description: The email of the User.
 *             password:
 *               type: string
 *               description: The password of the User.
 *             imgProfile:
 *               type: string
 *               description: The photo of the User.
 *             isClientFinal:
 *               type: boolean
 *               description: Whether the User is a client final
 *             number:
 *               type: string
 *               description: The number of the User.
 *             dni:
 *               type: string
 *               description: The dni of the user.
 *             roleId:
 *               type: integer
 *               description: The role of the User.
 *         business:
 *           type: object
 *           required:
 *             - name
 *             - nit
 *             - city
 *             - address
 *           properties:
 *             name:
 *               type: string
 *               description: The name of business.
 *             nit:
 *               type: string
 *               description: The NIT.
 *             city:
 *               type: string
 *               description: The city and province of business.
 *             address:
 *               type: string
 *               description: The address of business.
 *       example:
 *         user:
 *           fullName: 'luis uzcateguiu'
 *           username: 'User123'
 *           email: 'correo@email.com'
 *           password: 'abc123'
 *           imgProfile: 'file of the photo'
 *           isClientFinal: false
 *           number: '+1239876543210'
 *           roleId: 1
 *         business:
 *           name: 'mi negocio'
 *           nit: 'abc123456789'
 *           city: 'Cuenca, Azuay'
 *           address: 'calle 5 av. 6'
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Users = db.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'full_name'
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    imgProfile: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      },
      field: 'img_profile'
    },
    isVerify: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isClientFinal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'is_client_final'
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: true
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'role_id'
    }
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      }
    }
  }
);

module.exports = Users;
