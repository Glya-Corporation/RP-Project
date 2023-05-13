const { Router } = require('express');
const { createPio, getPio, getAllPio, updatePio, deletePio } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/pio', authenticate, createPio);

router.get('/pio/:id', authenticate, getPio);

router.get('/pio/cart/:id', authenticate, getAllPio);

router.put('/pio/:id/update', authenticate, updatePio);

router.delete('/pio/:id/delete', authenticate, deletePio);

module.exports = router;
