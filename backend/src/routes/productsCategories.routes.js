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

router.post('/product/category', authenticate, createProductCategory);

router.get('/product/category/:id', authenticate, getProductCategory);

router.get('/product/category/business/:id ', authenticate, getAllProductCategory);

router.put('/product/category/:id/updated', authenticate, updateProductCategory);

router.delete('/product/category/:id/delete', authenticate, deleteProductCategory);

module.exports = router;
