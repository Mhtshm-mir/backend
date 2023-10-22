const { log } = require("console")
const Data = require("../models/Data")

exports.data = async(req,res)=>{

const data = await Data.find()
res.send(data)

}