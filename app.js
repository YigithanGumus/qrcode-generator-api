const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/database');
const cors = require('cors');
const formidable = require('express-formidable');
const fileUpload = require('express-fileupload');
const publicRoutes = require('./routes/publicRoutes');
var path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(fileUpload());

/*
// JSON verileri ayrıştırmak için


// x-www-form-urlencoded verilerini ayrıştırmak için
app.use(express.urlencoded({ extended: true }));000
// form-data desteği ekle

*/
app.use(cors());
// Rotaları kullan
app.use('/api', authRoutes);
app.use('/api', userRoutes);

app.use('/', publicRoutes);

// Statik dosyaları sunmak için
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'views', 'public')));

// Veritabanını senkronize et ve sunucuyu başlat
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000 🚀');
  });
});
