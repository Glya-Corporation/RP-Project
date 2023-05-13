const { Router } = require('express');
const { getCart, updateCart, deleteCart } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/cart/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a cart by id
*     tags: [name tags]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The cart id
*     responses:
*       200:
*         description: The cart was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Cart'
* /api/v1/cart/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a cart by id
*     tags: [name tags]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/UpdateCart'
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The cart id
*     responses:
*       200:
*         description: The cart was successfully updated
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UpdatedMessage'
* /api/v1/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a cart by id
*     tags: [name tags]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The cart id
*     responses:
*       200:
*         description: The cart was successfully deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DeletedMessage'
*/

router.get('/cart/:id', authenticate, getCart);

router.put('/cart/:id/update', authenticate, updateCart);

router.delete('/cart/:id/delete', authenticate, deleteCart);

module.exports = router;
