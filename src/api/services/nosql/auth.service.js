const User = require('../../models/nosql/user.model');
const { userIDLength } = require('./../../../config/vars');
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);



exports.createUser = async (reqData) => {
    reqData.userID = await getNextUserID();
    reqData.password = bcrypt.hashSync(reqData.password, salt);
    reqData.name = reqData.name;
    return User.create(reqData);
}


async function getNextUserID () {
    let user = await User.findOne().sort({ userID: -1 }).limit(1);
    let userID = new Array(+userIDLength).join( '0' );
    if(!user) {
        userID = userID.substring(0, +userIDLength-1)+ "1";
        return userID;
    }
    let { userID: usersId } = user;
    usersId = parseInt(usersId);
    usersId+=1;
    if(usersId > 9999999) {
        return usersId+"";
    }
    userID = userID.substring(0, +userIDLength- (usersId+"").length)+ usersId;
    return userID;
}

exports.userByCriteria = (criteria) => {
    return User.findOne(criteria).lean();
}