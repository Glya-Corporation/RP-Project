const {} = require('../services');

const getCart = async (req, res, next) => {
  try {
    const id = req.params.id;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al obtener los usuarios',
      errorContent: error
    });
  }
};

const updateCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

const buyCart = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;

    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      message: 'Error al actualizar',
      errorContent: error
    });
  }
};

module.exports = { getCart, updateCart, buyCart };
