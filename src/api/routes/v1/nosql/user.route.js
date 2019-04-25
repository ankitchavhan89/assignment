const express = require('express');
const validate = require('express-validation');
const userController = require('../../../controllers/nosql/user.controller');
const router = express.Router();
const {
    getAllUser
} = require('../../../validations/user.validation');
const {
    authVerify,
} = require('../../../middlewares/auth');

//get all user list
router.route('/getAllUser').get(validate(getAllUser), authVerify, userController.getAllUser);

module.exports = router;
