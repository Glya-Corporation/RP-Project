const { Router } = require('express');
const login = require('../controllers/auth.controller.js');

const router = Router();

/**
* @openapi
* /api/v1/login:
*   post:
*     summary: Login
*     tags: [Auth]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               username:
*                 type: string
*                 description: username
*               password:
*                 type: string
*                 description: Password
*             example:
*               username: "example@gmail.com"
*               password: "123123"
*     responses:
*       200:
*         description: Login
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 token:
*                   type: string
*                   description: Token
*                 user:
*                   type: object
*                   properties:
*                     id:
*                       type: integer
*                       description: Id
*                     name:
*                       type: string
*                       description: Name
*                     username:
*                       type: string
*                       description: username
*                     role:
*                       type: object
*                       properties:
*                         id:
*                          type: integer
*                          description: Id
*                         name:
*                          type: string
*                          description: Name
*                         description:
*                          type: string
*                          description: Description
*/

router.post('/login', login);

module.exports = router;