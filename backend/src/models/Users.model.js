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
 *         username:
 *           type: string
 *           description: The name of the User.
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
 *         roleId:
 *           type: integer
 *           description: The role of the User.
 *         isVerify:
 *           type: boolean
 *           description: The status of the User.
 *       example:
 *         id: 1
 *         username: 'User123'
 *         email: 'correo@email.com'
 *         password: 'abc123'
 *         imgProfile: 'file of the photo'
 *         roleId: 1
 *         isVerify: false
 *     CreateUser:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - roleId
 *       properties:
 *         username:
 *           type: string
 *           description: The name of the User.
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
 *         roleId:
 *           type: integer
 *           description: The role of the User.
 *       example:
 *         username: 'User123'
 *         email: 'correo@email.com'
 *         password: 'abc123'
 *         imgProfile: 'file of the photo'
 *         roleId: 1
 */

const Users = db.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true,
            },
        },
        imgProfile: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true,
            },
            field: 'img_profile',
        },
        isVerify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        hooks: {
            beforeCreate: (user, options) => {
                const { password } = user;
                const hash = bcrypt.hashSync(password, 8);
                user.password = hash;
            },
        },
    }
);

module.exports = Users;
