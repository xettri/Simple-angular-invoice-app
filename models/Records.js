var mongoose = require('mongoose');
var helper   = require('../helper')
var recordModel = mongoose.Schema({
    itemname : {
      type:String,
      index: true,
      required:true
    },
    createDate : {
      type:Date,
      default:Date.now
    },
    type : {
      type : String,
      default : "Not Avilable"
    },
    price : {
      type : Number,
      required : true
    },
    dealer : {
      type : String,
      default : "Not Avilable"
    }
},
);

module.exports= mongoose.model("record",recordModel);
