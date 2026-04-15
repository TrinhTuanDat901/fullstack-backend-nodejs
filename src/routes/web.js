
const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFrog, createNewUser, getCreatePage} = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/create', getCreatePage);

router.post('/create-user', createNewUser);

module.exports = router;
