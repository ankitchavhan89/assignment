const mongoose = require('mongoose');
const uuidv4 = require('uuidv4');
// const Currency = mongoose.Types.Currency;
Schema = mongoose.Schema;

/**
 * Trade Schema
 * @private
 */

const TradeSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4
    },
    type: {
        type: String,
        enum: ["BUY", "SELL"],
        default: "BUY"
    },    
    symbol: { type: String },
    shares: { type: Number, min: 10, max: 30, default: 10 },
    price: { 
        type: String,
        default: '0' 
    },
    user: { 
      id: {type: String } ,
      name: { type: String },
    },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('Trade', TradeSchema);
