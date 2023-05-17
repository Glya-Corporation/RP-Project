const { Router } = require('express');
const { } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/role/category', authenticate, createRoleCategory);

router.get('/role/category/:id', authenticate, getRoleCategory);

router.get('/role/category', authenticate, getAllRoleCategory);

router.put('/role/category/:id/update', authenticate, updateRoleCategory);

router.delete('/role/category/:id/delete', authenticate, deleteRoleCategory);

module.exports = router;
