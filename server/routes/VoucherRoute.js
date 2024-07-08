const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findAll)
VoucherRouter.get("/pages/", VoucherController.getPagesOfItemsActive)
VoucherRouter.get("/page/:page", VoucherController.findItemsActiveByPage)
VoucherRouter.get("/pages/:search", VoucherController.getPagesOfItemsActive)
VoucherRouter.get("/page/:page/:search", VoucherController.findItemsActiveByPage)
module.exports = VoucherRouter