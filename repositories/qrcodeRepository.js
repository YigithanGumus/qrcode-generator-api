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
      width: 300, // Logo için daha büyük QR kod
      height: 300,
      errorCorrectionLevel: 'H',
      margin: 2,
      version: 5 // Daha büyük QR kod versiyonu
    };

    if (data.logo) {
      // Logo ayarlarını güncelle
      const jimp = require('jimp');
      const QRImage = await jimp.read(Buffer.from(data.qrCode));
      const logo = await jimp.read(data.logo);
      
      // Logo boyutunu ayarla (QR kodun %30'u kadar)
      const logoSize = QRImage.bitmap.width * 0.3;
      logo.resize(logoSize, logoSize);
      
      // Logo pozisyonunu merkeze ayarla
      const logoX = (QRImage.bitmap.width - logo.bitmap.width) / 2;
      const logoY = (QRImage.bitmap.height - logo.bitmap.height) / 2;

      // Logoyu QR kodun tam ortasına yerleştir
      QRImage.composite(logo, logoX, logoY, {
        mode: jimp.BLEND_SOURCE_OVER,
        opacitySource: 1,
        opacityDest: 1
      });
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

