const authRepository = require("../repositories/authRepository");

class AuthController {
    async login(req, res) {
        try {
            const user = await authRepository.login(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new AuthController();
