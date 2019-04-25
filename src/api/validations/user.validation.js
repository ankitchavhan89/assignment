const Joi = require("joi");
module.exports = {
	getAllUser: {
		headers: {
			"x-access-token": Joi.string().required()
		}
	}
};
