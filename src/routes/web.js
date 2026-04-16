
const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFrog, createNewUser, getCreatePage, getUpdatePage, postUpdateUser} = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/create', getCreatePage);
router.post('/create-user', createNewUser);

router.get('/update/:userId', getUpdatePage);
router.post('/update-user', postUpdateUser);

module.exports = router;
