const express = require('express');
const validate = require('express-validation');
const authController = require('../../../controllers/nosql/auth.controller');
const jwt = require('../../../middlewares/auth');
const router = express.Router();

//User will be register fron here
router.route('/register').post(authController.register);

//Login
router.route('/login').post(authController.login);

module.exports = router;
