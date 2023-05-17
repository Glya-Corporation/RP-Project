const { AuthServices } = require('../services');

const login = async (req, res, next) => {
    try {
        const credentials = req.body;
        const result = await AuthServices.login(credentials);
        if (result) {
            const { id, email, username, password, role, cart, business } = result;
            const token = await AuthServices.generateToken({ email, password, id });
            const user = { id, username, role, cart, business };
            res.status(200).json({ user, token });
        } else {
            res.status(400).json({ message: "Wrong password or email" });
        }
    } catch (error) {
        next({
            status: 400,
            message: error.message,
            errorContent: error
        })
    }
}

module.exports = login;