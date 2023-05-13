const { Router } = require('express');
const { createPic, getPic, getAllPic, updatePic, deletePic } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/pic', authenticate, createPic);

router.get('/pic/:id', authenticate, getPic);

router.get('/pic/cart/:id', authenticate, getAllPic);

router.put('/pic/:id/update', authenticate, updatePic);

router.delete('/pic/:id/delete', authenticate, deletePic);

module.exports = router;
