
const mongoose = require("mongoose")
const VoucherModel = require("../models/VoucherModel")
require("dotenv").config()

module.exports = function connection() {
    mongoose.connect(process.env.MONGODB_CONNECTION + "/" + process.env.MONGODB_DATABASE, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    })
        .then(() => {
            console.log("Connected to database")
            // const voucher = new VoucherModel({
            //     code: "123",
            //     expiredDate: Date(),
            //     state: "Active",
            //     type: "Percent One",
            //     condition: "null",
            //     discount: 0.1,
            //     maxDiscount: 10000,
            //     quantity: 10,
            //     usedQuantity: 1
            // })
            // voucher.save()
            //     .then((voucher) => console.log(voucher))
            //     .catch((err) => console.log(err))
        })
        .catch((err) => {
            console.log(err)
            process.exit()
        })
}
