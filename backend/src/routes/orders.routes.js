const { Router } = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getUserProducts,
  getUserOrders,
  getByUserProductsInCart,
  createNewProduct,
  addProductInCart,
  getProductsOrder
} = require("../controllers");

/**
 * @openapi
 * /api/v1/orders/{id}:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all orders from user
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

const router = Router();
router.get("/products/:userId", authenticate, getUserProducts);
router.get("/orders/:userId", getUserOrders);
router.get("/carts/:userId", authenticate, getByUserProductsInCart);
router.post("/product", authenticate, createNewProduct);
router.post("/carts/:cartId/product", authenticate, addProductInCart);
router.get("/orders/:oderId", getProductsOrder);



module.exports = router;