const User = require('../../models/nosql/user.model');

exports.findAll = async (reqData) => {
    try {
        const user = await User.findAll(reqData).lean().exec();
        return user;
    } catch (error) {
        throw error;
    }
};


exports.getUser = async () => {
    return await User.find({}, {password: 0});
}

