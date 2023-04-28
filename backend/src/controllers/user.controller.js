const { UserServices } = require('../services');

const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await UserServices.createUser(user);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al crear usuario',
      errorContent: error
    });
  }
};

const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getUserById(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener usuario',
      errorContent: error
    });
  }
};

const getAllUsersByRole = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.getAllUsersByRole(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const datos = req.body;
    const result = await UserServices.updateUser(id, datos);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar datos',
      errorContent: error
    });
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.verifyUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al verificar',
      errorContent: error
    });
  }
};

const updatePasswordUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const password = req.body;
    const result = await UserServices.updatePasswordUser(id, password);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar contraseña',
      errorContent: error
    });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await UserServices.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al eliminar usuario',
      errorContent: error
    });
  }
};

module.exports = {
  createUser,
  getUser,
  getAllUsersByRole,
  updateUser,
  verifyUser,
  updatePasswordUser,
  updatePasswordUser,
  deleteUser
};
