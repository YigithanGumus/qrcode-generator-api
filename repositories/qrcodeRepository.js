const QrCode = require("../models/qrcode");
const QRCode = require('qrcode');

class QrCodeRepository {
  async createQrCode(data) {
    if (!data.userId) {
      throw new Error('Kullanıcı ID\'si belirtilmemiş');
    }

    const existingQrCode = await QrCode.findOne({ where: { userId: data.userId } });
    if (existingQrCode) {
      throw new Error('Bu kullanıcı için zaten bir QR kodu oluşturulmuş');
    }

    const qrCodeDataURL = await QRCode.toDataURL(data.qrCode);
    const qrCodeImage = await QRCode.toFile(`qrimage/${data.userId}.png`, data.qrCode);

    return await QrCode.create({
      ...data,
      qrCodeDataURL,
      qrCodeImage: `qrimage/${data.userId}.png`,
      userId: data.userId,
      createdAt: new Date(),
    });
  }

  async getQrCodeByUserId(userId) {
    return await QrCode.findOne({ where: { userId } });
  } 

  async updateQrCode(id, data) {
    return await QrCode.update(data, { where: { id } });
  } 

  async deleteQrCode(id) {
    return await QrCode.destroy({ where: { id } });
  }

  async getAllQrCodes() {
    return await QrCode.findAll({ include: { model: User, attributes: ['id', 'name', 'email'] } });
  }
}

module.exports = new QrCodeRepository();

