const jwt = require('jsonwebtoken');
const ActiveToken = require('../models/activeToken'); 
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ message: 'Token is required' }); 
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const activeToken = await ActiveToken.findOne({ where: { userId: decoded.id, token } });
        if (!activeToken) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = decoded; 
        next(); 
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
