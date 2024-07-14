const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findItems)
VoucherRouter.get("/pages", VoucherController.getPagesOfItemsActive)
VoucherRouter.get("/exist/:code", VoucherController.isExist)
VoucherRouter.get("/randomcode", VoucherController.getRandomCode)
VoucherRouter.get("/type", VoucherController.getVoucherType)
VoucherRouter.delete("/:id", VoucherController.deleteItem)
VoucherRouter.post("/create", VoucherController.createVoucher)
module.exports = VoucherRouter
