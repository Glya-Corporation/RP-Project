const uploadPhoto = require('../middlewares/uploadPhoto.middleware');
const { ProdustServices } = require('../services');

const createProducts = async (req, res, next) => {
  try {
    const body = req.body;
    const img = req.files;
    let result = null;
    if (req.route.path.includes('multiples')) {
      result = await ProdustServices.createProduct(body);
    } else {
      if (img) {
        const getImgUrl = await uploadPhoto(img);
        body.imgUrl = getImgUrl;
      }
      result = await ProdustServices.createProduct([...body]);
    }
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear',
      errorContent: error
    });
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    let result = null;
    if (id) {
      result = await ProdustServices.getProduct(id);
    } else if (req.route.path.includes('all')) {
      result = await ProdustServices.getAllProducts();
    } else {
      res.status(404).json({ message: 'El id no puede ser nulo' });
    }
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const getAllProductsByBusiness = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await ProdustServices.getAllProductsByBusinessId(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const img = req.files;
    let result = null;
    if (req.route.path.includes('stock')) {
      const { stock } = body;
      result = await ProdustServices.updateProductStock(id, stock);
    } else {
      delete body.stock;
      const getImgUrl = await uploadPhoto(img);
      body.imgUrl = getImgUrl;
      result = await ProdustServices.updateProduct(id, body);
    }
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await ProdustServices.deleteProduct(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar',
      errorContent: error
    });
  }
};

module.exports = {
  createProducts,
  getProduct,
  getAllProductsByBusiness,
  updateProduct,
  deleteProduct
};
