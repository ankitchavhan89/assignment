const Trade = require('../../models/nosql/trade.model');

exports.add= (data) => { 
    return Trade.create(data);
}

exports.getTrade = () => { 
    return Trade.find({}, {}, {sort: {'_id': -1}});
}

exports.getTradeById = (reqData) => { 
    return Trade.find({user: reqData}, {}, {sort: {'_id': -1}});
}

exports.getTradeByStock = (reqData) => { 
    const query = {
        symbol: reqData.symbol,
        type: reqData.type,
        createdAt: {"$gte": reqData.start, "$lt": reqData.end},
    }
    return Trade.find(query, {}, {sort: {'_id': -1}});
}

exports.getTradeByStockPrice = (reqData) => { 
    return Trade.aggregate([
        {
            $match: { createdAt: { $lte: new Date(reqData.end), $gte: new Date(reqData.start)} } ,
        },
        {
            $group:
              {
                _id: "$id",
                maxPice: { $max: "$price" },
                minPrice: { $min: "$price" },
              }
        }
    ]);
}

exports.delete= () => { 
    return Trade.deleteMany({});
}
