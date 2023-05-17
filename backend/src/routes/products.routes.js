const { Router } = require('express');
const {
  createProducts,
  getProduct,
  getAllProductsByBusiness,
  updateProduct,
  deleteProduct
} = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');
const multer = require('multer');

const router = Router();

/**
 * @openapi
 * /api/v1/product/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a product.
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProduct'
 *     responses:
 *       201:
 *         description: The product was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * /api/v1/product/create/multiples:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create products multiples.
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/CreateProduct'
 *     responses:
 *       201:
 *         description: The product was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * /api/v1/product/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get a product.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was successfully found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 * /api/v1/products/all:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get products.
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: The product was successfully found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * /api/v1/products/business/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get products by business id.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The business id
 *     responses:
 *       200:
 *         description: The product was successfully found.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 * /api/v1/product/{id}/update/stock:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update product stock by Id.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AddProductStock'
 *     responses:
 *       200:
 *         description: The product was successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Updated successfull'
 * /api/v1/product/{id}/update:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update product by Id.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateProduct'
 *     responses:
 *       200:
 *         description: The product was successfully updated.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: The message of the register
 *                   example: 'Updated successfull'
 * /api/v1/product/{id}/delete:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete product by Id.
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was successfully deleted.
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

const upload = multer();

router.post('/product/create', /* authenticate, */ upload.any(), createProducts);

router.post('/product/create/multiples', /* authenticate, */ createProducts);

router.get('/product/:id', authenticate, getProduct);

router.get('/products/all', authenticate, getProduct);

router.get('/products/business/:id', authenticate, getAllProductsByBusiness);

router.put('/product/:id/update/stock', authenticate, updateProduct);

router.put('/product/:id/update', authenticate, updateProduct);

router.delete('/product/:id/delete', authenticate, deleteProduct);

module.exports = router;
