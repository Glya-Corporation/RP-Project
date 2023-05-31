const { Router } = require('express');
const { } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

/* router.post('/role', authenticate, createRole);

router.get('/role/:id', authenticate, getRole);

router.get('/role/indutry/:id', authenticate, getAllRoles);

router.put('/role/:id/update', authenticate, updateRole);

router.delete('/role/:id/delete', authenticate, deleteRole); */

module.exports = router;
