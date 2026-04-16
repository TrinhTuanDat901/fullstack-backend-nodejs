
const express = require('express');
const router = express.Router();
const {getHomePage, getABC, getFrog, createNewUser, getCreatePage, getUpdatePage, postUpdateUser, deleteUser} = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/create', getCreatePage);

router.get('/update/:userId', getUpdatePage);

router.post('/update-user', postUpdateUser);

router.post('/create-user', createNewUser);

router.post('/delete-user', deleteUser);

module.exports = router;
