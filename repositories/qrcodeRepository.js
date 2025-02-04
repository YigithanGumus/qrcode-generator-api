const QrCode = require("../models/qrcode");
const QRCode = require('qrcode');

class QrCodeRepository {
  async createQrCode(data) {
    if (!data.userId) {
      throw new Error('Kullanıcı ID\'si belirtilmemiş');
    }

    const options = {
      color: {
        dark: data.qrColor || '#000000',
        light: data.qrBackgroundColor || '#ffffff'
      },
      width: 200,
      height: 200,
      errorCorrectionLevel: 'H',
      margin: 1
    };

    if (data.logo) {
      options.logoPath = data.logo;
      options.logoWidth = 50;
      options.logoHeight = 50;
    }

    const qrCodeDataURL = await QRCode.toDataURL(data.qrCode, options);

    // Rastgele bir isim oluştur
    const randomString = Math.random().toString(36).substring(2, 15);
    const timestamp = Date.now();
    const fileName = `qr_${randomString}_${timestamp}.png`;

    const qrCodeImage = await QRCode.toFile(
      `qrimage/${fileName}`,
      data.qrCode,
      options
    );
 
    return await QrCode.create({
      ...data,
      qrCodeDataURL,
      qrCodeImage: `qrimage/${fileName}`,
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

