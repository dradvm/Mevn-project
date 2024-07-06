const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findAll)
VoucherRouter.get("/count", VoucherController.countAllDocument)
module.exports = VoucherRouter