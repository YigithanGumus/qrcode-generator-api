const sequelize = require('./db');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
  });
});