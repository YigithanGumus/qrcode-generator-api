# QRCode Generator API

Bu proje, QR kod oluşturma ve yönetme işlemleri için geliştirilmiş bir REST API'dir. Node.js ve Sequelize ORM kullanılarak geliştirilmiştir.

This project is a REST API developed for QR code generation and management. It is built using Node.js and Sequelize ORM.

## 🚀 Özellikler / Features

- QR kod oluşturma / QR code generation
- QR kod yönetimi / QR code management
- RESTful API endpoints
- JWT tabanlı kimlik doğrulama / JWT-based authentication
- Dosya yükleme desteği / File upload support
- MySQL veritabanı entegrasyonu / MySQL database integration

## 📋 Gereksinimler / Requirements

- Node.js (v14 veya üzeri / or higher)
- MySQL
- npm veya yarn / or yarn

## 🔧 Kurulum / Installation

1. Projeyi klonlayın / Clone the project:
```bash
git clone https://github.com/kullaniciadi/qrcode-generator-api.git
cd qrcode-generator-api
```

2. Bağımlılıkları yükleyin / Install dependencies:
```bash
npm install
```

3. `.env` dosyasını oluşturun ve gerekli değişkenleri ayarlayın / Create `.env` file and set required variables:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASS=your_password
DB_NAME=your_database
JWT_SECRET=your_jwt_secret
```

4. Veritabanı migrasyonlarını çalıştırın / Run database migrations:
```bash
npx sequelize-cli db:migrate
```

5. Uygulamayı başlatın / Start the application:
```bash
npm start
```

## 📚 API Endpoints

### QR Kod İşlemleri / QR Code Operations
- `POST /api/qrcode/generate` - Yeni QR kod oluşturma / Generate new QR code
- `GET /api/qrcode/:id` - QR kod detaylarını görüntüleme / View QR code details
- `GET /api/qrcode` - Tüm QR kodları listeleme / List all QR codes
- `DELETE /api/qrcode/:id` - QR kod silme / Delete QR code

## 🛠️ Teknolojiler / Technologies

- Node.js
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication
- QRCode.js

## 📝 Lisans / License

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Katkıda Bulunma / Contributing

1. Fork yapın / Fork the project
2. Feature branch oluşturun / Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin / Commit your changes (`git commit -m 'feat: Add some amazing feature'`)
4. Branch'inizi push edin / Push to the branch (`git push origin feature/amazing-feature`)
5. Pull Request açın / Open a Pull Request 