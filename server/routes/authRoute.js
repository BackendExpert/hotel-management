const express = require('express');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/signup', authController.signup)
router.post('/signin', authController.signin)
router.post('/forgetpass', authController.chechemailtogetpass)
router.post('/verifyotp/:token', authController.verifyotp)
router.post('/updatepassword/:token', authController.updatepassword)

module.exports = router;