const path = require('path');

/**
 *  import .env variables
 */

require('dotenv-safe').load({
    allowEmptyValues: true,
    path: path.join(__dirname, '../../.env'),
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    apiLink: `http://${process.env.HOST}:${process.env.PORT}`,
    basePath: '/api/v1',
    jwtSecret: process.env.JWT_SECRET,
    jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
    mongo: {
        uri: process.env.NODE_ENV === 'test'
            ? process.env.MONGO_URI_TESTS : process.env.MONGO_URI,
        enabled: process.env.MONGO_ENABLED,
    },
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    userIDLength: process.env.USER_ID_LENGTH,
};
