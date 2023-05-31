const { createBusiness, getBusiness, getAllBusiness, updateBusiness, deleteBusiness } = require('./business.controllers.js');

const { createFavorites, getFavorites, getAllFavorites, deleteFavorites } = require('./businessFavorites.controllers.js');

const { getCart, updateCart, buyCart } = require('./cart.controllers.js');

const { getOrder, getAllOrdersByUserId, deleteOrdes } = require('./orders.controllers.js');

const { createProducts, getProduct, getAllProductsByBusiness, updateProduct, deleteProduct } = require('./products.controllers.js');

const { createProductCategory, getProductCategory, getAllProductCategory, updateProductCategory, deleteProductCategory } = require('./productsCategories.controllers.js');

const { createPic, updatePic, deletePic } = require('./productsInCart.controllers.js');

const { createUser, getUser, updateUser, verifyUser, updatePasswordUser, deleteUser } = require('./user.controller.js');

module.exports = {
  createBusiness,
  getBusiness,
  getAllBusiness,
  updateBusiness,
  deleteBusiness,
  createFavorites,
  getFavorites,
  getAllFavorites,
  deleteFavorites,
  getCart,
  updateCart,
  buyCart,
  getOrder,
  getAllOrdersByUserId,
  deleteOrdes,
  createProducts,
  getProduct,
  getAllProductsByBusiness,
  updateProduct,
  deleteProduct,
  createProductCategory,
  getProductCategory,
  getAllProductCategory,
  updateProductCategory,
  deleteProductCategory,
  createPic,
  updatePic,
  deletePic,
  createUser,
  getUser,
  updateUser,
  verifyUser,
  updatePasswordUser,
  deleteUser
};
