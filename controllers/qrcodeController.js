const qrCodeRepository = require('../repositories/qrcodeRepository');

class QrCodeController {
    async createQrCode(req, res) {
        const qrCode = await qrCodeRepository.createQrCode(req.body);
        res.status(201).json(qrCode);
    }

    async getQrCodeByUserId(req, res) {
        const qrCode = await qrCodeRepository.getQrCodeByUserId(req.params.userId);
        res.status(200).json(qrCode);
    }

    async updateQrCode(req, res) {
        const qrCode = await qrCodeRepository.updateQrCode(req.params.id, req.body);
        res.status(200).json(qrCode);
    }

    async deleteQrCode(req, res) {
        const qrCode = await qrCodeRepository.deleteQrCode(req.params.id);
        res.status(200).json(qrCode);
    }

    async getAllQrCodes(req, res) {
        const qrCodes = await qrCodeRepository.getAllQrCodes();
        res.status(200).json(qrCodes);
    }

    async getQrCodeById(req, res) {
        const qrCode = await qrCodeRepository.getQrCodeById(req.params.id);
        res.status(200).json(qrCode);
    }
}

module.exports = new QrCodeController();