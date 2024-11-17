# Node.js image'ini base image olarak kullan
FROM node:16

# Çalışma dizinini ayarla
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Uygulamanın tüm dosyalarını kopyala
COPY . .

# Uygulama için port tanımla
EXPOSE 3000

# Uygulamayı başlat
CMD ["node", "app.js"]
