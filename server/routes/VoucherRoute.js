const express = require("express")
const VoucherController = require("../controllers/VoucherController")
const VoucherRouter = express.Router()

VoucherRouter.get("/", VoucherController.findVouchers)
VoucherRouter.get("/pages", VoucherController.getPagesOfVouchersActive)
VoucherRouter.get("/exist/:code", VoucherController.isExist)
VoucherRouter.get("/randomcode", VoucherController.getRandomCode)
VoucherRouter.get("/type", VoucherController.getVoucherType)
VoucherRouter.get("/find/:code", VoucherController.findVoucher)
VoucherRouter.get('/findById/:id', VoucherController.findById);
VoucherRouter.delete("/:id", VoucherController.deleteVoucher)
VoucherRouter.post("/create", VoucherController.createVoucher)
VoucherRouter.post("/update/:code", VoucherController.updateVoucher)
VoucherRouter.get("/voucherListByProduct/:id", VoucherController.getVoucherListByProduct)
VoucherRouter.post("/saveVoucher/:id", VoucherController.saveVoucher)
module.exports = VoucherRouter
