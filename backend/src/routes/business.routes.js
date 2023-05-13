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

router.post('/business', authenticate, createBusiness);

router.get('/business/:id', authenticate, getBusiness);

router.get('/business/category/:id', authenticate, getAllBusiness);

router.put('/business/:id', authenticate, updateBusiness);

router.delete('/business/:id', authenticate, deleteBusiness);

module.exports = router;
