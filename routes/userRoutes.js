const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const { RolesEnum } = require('../enums/rolesEnum');

router.post('/users', userController.createUser);
router.get('/users/:id', RolesEnum.ADMIN, authMiddleware, userController.getUserById);
router.get('/users', RolesEnum.ADMIN, authMiddleware, userController.getAllUsers);
router.put('/users/:id', RolesEnum.ADMIN, authMiddleware, userController.updateUser);
router.delete('/users/:id', RolesEnum.ADMIN, authMiddleware, userController.deleteUser);

router.get('/users/qrcode', RolesEnum.USER, authMiddleware, qrcodeController.getQrCode);
router.post('/users/qrcode', RolesEnum.USER, authMiddleware, qrcodeController.createQrCode);
router.put('/users/qrcode/:id', RolesEnum.USER, authMiddleware, qrcodeController.updateQrCode);
router.delete('/users/qrcode/:id', RolesEnum.USER, authMiddleware, qrcodeController.deleteQrCode);


module.exports = router;
