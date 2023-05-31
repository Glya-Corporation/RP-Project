const { Router } = require('express');
const { authenticate } = require('../middlewares/auth.middleware');
const { getOrder, getAllOrdersByUserId, deleteOrdes } = require('../controllers');

/**
 * @openapi
 * /api/v1/order/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a order by id
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order was successfully found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 * /api/v1/orders/user/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all order by order id.
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order was successfully found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 * /api/v1/order/{id}/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a order by id
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The order id
 *     responses:
 *       200:
 *         description: The order was successfully deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeletedMessage'
 */

const router = Router();

router.get('/order/:id', authenticate, getOrder);

router.get('/orders/user/:id', authenticate, getAllOrdersByUserId);

router.delete('/order/:id/delete', authenticate, deleteOrdes);

module.exports = router;
