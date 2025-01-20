const jwt = require('jsonwebtoken');
const ActiveToken = require('../models/activeToken'); // ActiveToken modelini ekleyin
require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Token'ı al

    if (!token) {
        return res.status(401).json({ message: 'Token is required' }); // Token yoksa hata döndür
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' }); // Geçersiz token hatası
        }

        // Kullanıcının önceki token'ını iptal et
        await ActiveToken.destroy({ where: { userId: decoded.id } });

        req.user = decoded; // Kullanıcı bilgilerini isteğe ekle
        next(); // Middleware'den geç
    });
};

module.exports = authMiddleware;
