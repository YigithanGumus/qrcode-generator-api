# Node.js base image
FROM node:16

# Çalışma dizini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# NPM cache'i temizle ve bağımlılıkları yükle
RUN npm cache clean --force && npm install

# Uygulama dosyalarını kopyala
COPY . .

# Ortam değişkenlerini yükle
RUN npm install dotenv

# Uygulama için port aç
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]
