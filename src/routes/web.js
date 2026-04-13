
const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFrog} = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/frog', getFrog);

router.get('/abc', getABC);

module.exports = router;
