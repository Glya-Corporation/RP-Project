const { Router } = require('express');
const {
  createProductCategory,
  getProductCategory,
  getAllProductCategory,
  updateProductCategory,
  deleteProductCategory
} = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/product/category:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Create a new category products.
*     tags: [Category products]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CreateCategoryProducts'
*     responses:
*       201:
*         description: The category was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/CategoryProducts'
* /api/v1/product/category/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a category products by id
*     tags: [Category products]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The Category Products id
*     responses:
*       200:
*         description: The Category Products was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/CategoryProducts'
* /api/v1/product/category/business/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get all Category Products by business id.
*     tags: [Category products]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The category id
*     responses:
*       200:
*         description: The category products was successfully found
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/CategoryProducts'
* /api/v1/product/category/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a category products by id
*     tags: [Category products]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/UpdateBusiness'
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The category products id
*     responses:
*       200:
*         description: The category products was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UpdatedMessage'
* /api/v1/product/category/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a category products by id
*     tags: [Category products]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The category products id
*     responses:
*       200:
*         description: The category products was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DeletedMessage'
*/

router.post('/product/category', authenticate, createProductCategory);

router.get('/product/category/:id', authenticate, getProductCategory);

router.get('/product/category/business/:id ', authenticate, getAllProductCategory);

router.put('/product/category/:id/updated', authenticate, updateProductCategory);

router.delete('/product/category/:id/delete', authenticate, deleteProductCategory);

module.exports = router;
