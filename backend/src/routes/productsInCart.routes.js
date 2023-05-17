const { Router } = require('express');
const { createPic, getPic, getAllPic, updatePic, deletePic } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/pic:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Add a new product to cart.
*     tags: [Cart]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/PIC'
*     responses:
*       201:
*         description: The business was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Business'
* /api/v1/pic/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a product in cart by id
*     tags: [Cart]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/UpdatePIC'
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product in cart id
*     responses:
*       200:
*         description: The product in cart was successfully updated
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UpdatedMessage'
* /api/v1/pic/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a product in cart by id
*     tags: [Cart]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The product in cart was successfully deleted
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DeletedMessage'
*/

router.post('/pic', authenticate, createPic);

router.put('/pic/:id/update', authenticate, updatePic);

router.delete('/pic/:id/delete', authenticate, deletePic);

module.exports = router;
