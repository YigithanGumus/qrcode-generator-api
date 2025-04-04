const express = require('express');
const router = express.Router();
const fs = require('fs');

// Statik dosyaları sunmak için
router.use(express.static('public'));

router.get('/', function (req, res) {
    res.render('index');
});

module.exports = router;
