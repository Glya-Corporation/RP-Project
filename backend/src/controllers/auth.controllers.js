const { AuthServices } = require("../services");

const userLogin = async (req, res, next) => {
  try {
    const credentials = req.body;
    const result = await AuthServices.authenticate(credentials);
    if (result) {
      const { firstname, lastname, email, id, phone } = result.result;
      const user = { firstname, lastname, email, id, phone };
      const token = AuthServices.genToken(user);
      user.token = token;
      res.json({ ...user });
    } else {
      res.status(400).json({ message: "invalid infomation" });
    }
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "invalid email or password",
    });
  }
};

module.exports = {
  userLogin,
};