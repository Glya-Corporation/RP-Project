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
  createUser,
  getUser,
  getAllUsersByRole,
  updateUser,
  verifyUser,
  updatePasswordUser,
  deleteUser,
  createProducts,
  getProduct,
  getAllProductsByBusiness,
  updateProduct,
  deleteProduct
};
