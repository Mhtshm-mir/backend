const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    merchantName: {
    type:String
  },
  amount: {
    type:String,required:true

  },
  status:{
    type:String,required:true

  },
  initiatedAt:{
    type:String,required:true
  },
  lastUpdatedAt:{
    type:String,required:true
  },
  estimatedDate:
  {
    type:String,required:true

  }
});

const Data = mongoose.model('blunopay', dataSchema);

module.exports = Data