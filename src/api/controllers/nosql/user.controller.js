const httpStatus = require('http-status');
const {
    _,
} = require('lodash');
const customResponse = require('../../utils/response');
const userService = require('../../services/nosql/user.service');
const logger = require('../../utils/logger');
const {
  errorMessage,
  version,
} = require('../../../config/constants');
exports.getAllUser = async (req, res) => {
    try {
        const user = await userService.getUser();
        return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.SUCCESS, version.v1, user);
    } catch (error) {
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

