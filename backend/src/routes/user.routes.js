const { Router } = require('express');
const {
  createUser,
  getUser,
  updateUser,
  verifyUser,
  updatePasswordUser,
  deleteUser
} = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/user/register:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a user.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUser'
 *     responses:
 *       201:
 *         description: The User was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * /api/v1/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The User was successfully found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * /api/v1/user/{id}/update:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: The User was successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Updated successfull'
 * /api/v1/user/{id}/update/password:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserPassword'
 *     responses:
 *       200:
 *         description: The User was successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Updated successfull'
 * /api/v1/user/{id}/recover/password:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RecoverUserPassword'
 *     responses:
 *       200:
 *         description: The User was successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Updated successfull'
 * /api/v1/user/{id}/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a user.
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The User was successfully deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Deleted successfull'
 */

router.post('/user/register', createUser);

router.get('/user/:id', authenticate, getUser);

router.put('/user/:id/update', authenticate, updateUser);

router.put('/user/:id/verify', authenticate, verifyUser);

router.put('/user/:id/update/password', authenticate, updatePasswordUser);

router.put('/user/:id/recover/password', authenticate, updatePasswordUser);

router.delete('/user/:id/delete', authenticate, deleteUser);

module.exports = router;
