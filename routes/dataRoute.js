const express = require("express")
const router = express.Router()
const blogController = require("../controllers/DataController")

router.get("/",blogController.data)

module.exports= router