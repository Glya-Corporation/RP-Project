const {
  createBusiness,
  getBusiness,
  getAllBusiness,
  updateBusiness,
  deleteBusiness
} = require('./business.controllers.js');

const {
  createFavorites,
  getFavorites,
  getAllFavorites,
  deleteFavorites
} = require('./businessFavorites.controllers.js');

const {
  createUser,
  getUser,
  getAllUsersByRole,
  updateUser,
  verifyUser,
  updatePasswordUser,
  deleteUser
} = require('./user.controller.js');
const {
  createProducts,
  getProduct,
  getAllProductsByBusiness,
  updateProduct,
  deleteProduct
} = require('./products.controller.js');

module.exports = {
  createBusiness,
  getBusiness,
  getAllBusiness,
  updateBusiness,
  deleteBusiness,
  createFavorites,
  getFavorites,
  getAllFavorites,
  deleteFavorites
};
