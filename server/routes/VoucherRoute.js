const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findItems)
VoucherRouter.get("/pages", VoucherController.getPagesOfItemsActive)
module.exports = VoucherRouter