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

router.post('/favorites/business', authenticate, createFavorites);

router.get('/favorites/business/:id', authenticate, getFavorites);

router.get('/favorites/business', authenticate, getAllFavorites);

router.put('/favorites/business/:id/update', authenticate, updateFavorites);

router.delete('/favorites/business/:id/delete', authenticate, deleteFavorites);

module.exports = router;
