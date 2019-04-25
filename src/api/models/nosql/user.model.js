const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');
Schema = mongoose.Schema;

/**
 * Users Schema
 * @private
 */

const UsersSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    userID: {
        type: String,
        required: true,
        unique: true
    },
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4
    },
    name: { type: String, trim: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model('User', UsersSchema);
