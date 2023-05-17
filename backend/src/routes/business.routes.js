const { Router } = require('express');
const {
  createBusiness,
  getBusiness,
  getAllBusiness,
  updateBusiness,
  deleteBusiness
} = require('../controllers');

const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/business:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Create a new business.
*     tags: [Business]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CreateBusiness'
*     responses:
*       201:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Business'
* /api/v1/business/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a business by id
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Business'
* /api/v1/business/category/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get all business by category id.
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The category id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/Business'
* /api/v1/business/{id}/update:
*   put:
*     security:
*       - bearerAuth: []
*     summary: Update a business by id
*     tags: [Business]
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
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/UpdatedMessage'
* /api/v1/business/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a business by id
*     tags: [Business]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The business id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DeletedMessage'
*/

router.post('/business', authenticate, createBusiness);

router.get('/business/:id', authenticate, getBusiness);

router.get('/business/category/:id', authenticate, getAllBusiness);

router.put('/business/:id/update', authenticate, updateBusiness);

router.delete('/business/:id/delete', authenticate, deleteBusiness);

module.exports = router;
