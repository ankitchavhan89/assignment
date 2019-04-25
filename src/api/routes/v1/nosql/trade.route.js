const express = require('express');
const validate = require('express-validation');
const tradeController = require('../../../controllers/nosql/trade.controller');
const router = express.Router();

const {
    addTrade,
    getTrade,
    getTradeByUserId,
    getTradeStock,
    getTradeStockPrice,
    deleteTrade
} = require('../../../validations/trade.validation');
const {
    authVerify,
} = require('../../../middlewares/auth');


//Create a trade
router.route('/trades').post(validate(addTrade), authVerify, tradeController.addTrade);

//Get all trades
router.route('/trades').get(validate(getTrade), authVerify, tradeController.getAllTrade);

//Get trades by userId
router.route('/users/:userId').get(validate(getTradeByUserId), authVerify, tradeController.getTradeByUserId);

//Delete all trades
router.route('/erase').delete(validate(deleteTrade), authVerify, tradeController.deleteAllTrade);

//Filter trades with symbol, type, start, end
router.route('/stocks/:symbol/trades/:type?/:start?/:end?').get(validate(getTradeStock), authVerify, tradeController.getTradeStock);

//Filter trades stocks with symbol, start, end
router.route('/stocks/:symbol/price/:start?/:end?').get(validate(getTradeStockPrice), authVerify, tradeController.getTradeStockPrice);

module.exports = router;