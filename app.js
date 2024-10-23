
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();

// JSON isteklerini ayrıştırmak için
app.use(bodyParser.json());

// Rotaları kullan
app.use('/api', userRoutes);

// Veritabanını senkronize et ve sunucuyu başlat
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
