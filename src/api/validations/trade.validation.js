const Joi = require("joi");
module.exports = {
	addTrade: {
		headers: {
			"x-access-token": Joi.string().required()
        },
        body: Joi.object().keys({
			type: Joi.string().required(),
			symbol: Joi.string().required(),
			share: Joi.number().integer(),
			price: Joi.number().integer(),
		})
    },
    getTrade: {
		headers: {
			"x-access-token": Joi.string().required()
        }
    },
    getTradeByUserId: {
        params: Joi.object().keys({
            userId: Joi.string().required(),
        }),
		headers: {
			"x-access-token": Joi.string().required()
        }
    },
    getTradeStock: {
        params: Joi.object().keys({
            type: Joi.string().required(),
            start: Joi.string().required(),
            end: Joi.string().required(),
        }),
		headers: {
			"x-access-token": Joi.string().required()
        }
    },
    getTradeStockPrice: {
        params: Joi.object().keys({
            start: Joi.string().required(),
            end: Joi.string().required(),
        }),
		headers: {
			"x-access-token": Joi.string().required()
        }
    },
    deleteTrade: {
		headers: {
			"x-access-token": Joi.string().required()
        }
    },
};
