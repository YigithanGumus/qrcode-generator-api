const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const qrcodeController = require('../controllers/qrcodeController');
const authMiddleware = require('../middleware/authMiddleware');
    
router.post('/users', userController.createUser);
router.get('/users/:id', authMiddleware, userController.getUserById);
router.get('/users', authMiddleware, userController.getAllUsers);
router.put('/users/:id', authMiddleware, userController.updateUser);
router.delete('/users/:id', authMiddleware, userController.deleteUser);

router.get('/users/qrcode', authMiddleware, qrcodeController.getAllQrCodes);
router.post('/users/qrcode', authMiddleware, qrcodeController.createQrCode);
router.put('/users/qrcode/:id', authMiddleware, qrcodeController.updateQrCode);
router.delete('/users/qrcode/:id', authMiddleware, qrcodeController.deleteQrCode);


module.exports = router;
