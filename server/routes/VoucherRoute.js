const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findAll)

module.exports = VoucherRouter