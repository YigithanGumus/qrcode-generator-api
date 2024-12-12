
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const cors = require('cors');

const app = express();

// JSON isteklerini ayrıştırmak için
app.use(bodyParser.json());
app.use(cors());

// Rotaları kullan
app.use('/api', authRoutes);
app.use('/api', userRoutes);

// Veritabanını senkronize et ve sunucuyu başlat
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
