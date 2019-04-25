const httpStatus = require('http-status');
const {
    _,
} = require('lodash');
const customResponse = require('../../utils/response');
const tradeService = require('../../services/nosql/trade.service');
const logger = require('../../utils/logger');
const {
  errorMessage,
  version,
} = require('../../../config/constants');


exports.getAllTrade = async (req, res) => {
    try {
        const trade = await tradeService.getTrade();
        return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.SUCCESS, version.v1, trade);
    } catch (error) {
        console.log(error)
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

exports.getTradeByUserId = async (req, res) => {
    try { 
        const user = {id: req.params.userId, name: req.decoded.name};
        const reqData = user;
        const trade = await tradeService.getTradeById(reqData);
        return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.SUCCESS, version.v1, trade);
    } catch (error) {
        console.log(error)
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

exports.addTrade = async (req, res) => {
    try {
        const reqData = req.body;
        const mydata = { id:req.decoded.id, name:req.decoded.name};
        reqData.user = mydata;
        const trade = await tradeService.add(reqData);
        return customResponse.setResponse(res, true, httpStatus.CREATED, errorMessage.SUCCESS, version.v1, trade);
    } catch (error) {
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

exports.deleteAllTrade = async (req, res) => {
    try {
        const trade = await tradeService.delete(req.body);
        return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.TRADESDELETED, version.v1, trade);
    } catch (error) {
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

exports.getTradeStock = async (req, res) => {
    try {
        const trade = await tradeService.getTradeByStock(req.params);
        return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.SUCCESS, version.v1, trade);
    } catch (error) {
        console.log(error)
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};

exports.getTradeStockPrice = async (req, res) => {
    try {console.log(req.params,111)
        const trade = await tradeService.getTradeByStockPrice(req.params);
        if(trade){
            return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.SUCCESS, version.v1, trade);
        } else{
            return customResponse.setResponse(res, true, httpStatus.OK, errorMessage.NOTRADES, version.v1, trade);
        }
        
    } catch (error) {
        console.log(error)
        return customResponse.setResponse(res, false, httpStatus.EXPECTATION_FAILED, errorMessage.FAILED, version.v1, error);
    }
};