const express = require('express');

const router = express.Router();
const {
    mongo
} = require('../../../config/vars');


if (mongo.enabled === 'true') {
    const userRoutes = require('./nosql/user.route');
    const authRoutes = require('./nosql/auth.route');
    const tradeRoutes = require('./nosql/trade.route');
    
    router.use('/auth', authRoutes);
    router.use('/trade', tradeRoutes);
    router.use('/user', userRoutes);
}

module.exports = router;
