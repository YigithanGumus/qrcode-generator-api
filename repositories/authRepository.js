const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

class AuthRepository {
    async login(data) {
        const { email, password } = data;
        const user = await User.findOne({
            where: { email }
        });
        if (!user) {
            throw new Error('Email not found');
        }


        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            throw new Error('Incorrect email and password combination');
        }


        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION
        });
        
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token,
        };
    
    }
}

module.exports = new AuthRepository();