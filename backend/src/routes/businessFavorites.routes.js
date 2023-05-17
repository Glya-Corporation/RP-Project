const { Router } = require('express');
const {
  createFavorites,
  getFavorites,
  getAllFavorites,
  updateFavorites,
  deleteFavorites
} = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/**
* @openapi
* /api/v1/favorites/business:
*   post:
*     security:
*       - bearerAuth: []
*     summary: Add a new favorites business.
*     tags: [Business Favorites]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/CreateFBusiness'
*     responses:
*       201:
*         description: The business was successfully created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/FBusiness'
* /api/v1/favorites/business/{id}:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get a favorites business by id
*     tags: [Business Favorites]
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
* /api/v1/favorites/business/all:
*   get:
*     security:
*       - bearerAuth: []
*     summary: Get all favorites business by user id.
*     tags: [Business Favorites]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The user id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/schemas/FBusiness'
* /api/v1/favorites/business/{id}/delete:
*   delete:
*     security:
*       - bearerAuth: []
*     summary: Delete a favorite business by register id
*     tags: [Business Favorites]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The register id
*     responses:
*       200:
*         description: The business was successfully found
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/DeletedMessage'
*/

router.post('/favorites/business', authenticate, createFavorites);

router.get('/favorites/business/:id', authenticate, getFavorites);

router.get('/favorites/business/all', authenticate, getAllFavorites);

router.delete('/favorites/business/:id/delete', authenticate, deleteFavorites);

module.exports = router;
