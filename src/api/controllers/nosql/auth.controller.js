const httpStatus = require("http-status");
const randomstring = require("randomstring");
const customResponse = require("../../utils/response");
const logger = require("../../utils/logger");
const authService = require("../../services/nosql/auth.service");
const {
	errorMessage,
	version
} = require("../../../config/constants");
const controller = "[authController]";
const jwt = require("../../middlewares/auth");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

exports.register = async (req, res) => {
	const methodName = "[register]";
	try {
		let result;
		let reqData = req.body;
		
		// reqData.uuid = uuidv4();
		result = await authService.createUser(reqData);

		if (result && result.email) {
			return customResponse.setResponse(
				res,
				true,
				httpStatus.CREATED,
				errorMessage.USER_SUCCESSFULLY_REGISTERED,
				version.v1,
				[result]
			);
		} else { console.log(3534)
			return customResponse.setResponse(
				res,
				false,
				httpStatus.EXPECTATION_FAILED,
				errorMessage.FAILED,
				version.v1,
				[]
			);
		}
	} catch (error) {console.log(error)
		logger.error(controller, methodName, error, JSON.stringify(error));
		if (error.code == 11000) {
			return customResponse.setResponse(
				res,
				false,
				httpStatus.EXPECTATION_FAILED,
				errorMessage.EMAIL_ALREADY_EXISTS,
				version.v1,
				[]
			);
		}
		return customResponse.setResponse(
			res,
			false,
			httpStatus.INTERNAL_SERVER_ERROR,
			errorMessage.FAILED,
			version.v1,
			error
		);
	}
};

exports.login = async (req, res) => {
	const methodName = "[login]";
	try {
        const reqData = req.body;
        let criteria = {
			email: reqData.email
		};
        let user = await authService.userByCriteria(criteria);
        const data = bcrypt.compareSync(reqData.password, user.password);
        if (data) {
            const accessToken = await jwt.generate(user);
            let dataToSend = {
                email: user.email,
                uuid: user.uuid,
                name : user.name,
                accessToken
            };

            return customResponse.setResponse(
                res,
                true,
                httpStatus.OK,
                errorMessage.LOGGED_IN_SUCCESSFULLY,
                version.v1,
                dataToSend
            );
        } else {
            return customResponse.setResponse(
                res,
                false,
                httpStatus.EXPECTATION_FAILED,
                errorMessage.INVALID_PASSWORD,
                version.v1,
                {}
            );
        }
		
	} catch (error) {
		logger.error(controller, methodName, error);
		return customResponse.setResponse(
			res,
			false,
			httpStatus.EXPECTATION_FAILED,
			errorMessage.FAILED,
			version.v1,
			error
		);
	}
};


