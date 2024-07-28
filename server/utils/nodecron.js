const cron = require('node-cron');
const VoucherModel = require("../models/VoucherModel");

var schedule = cron.schedule('* * * * *', async () => {
    VoucherModel.find({
        state: ["Upcoming", "Active"]
    })
        .then((vouchers) => {
            vouchers.forEach(async (voucher) => {
                switch (voucher.state) {
                    case "Active": {
                        if (new Date() > voucher.expiredDate) {
                            voucher.state = "Expired"
                            await voucher.save()
                        }
                        break
                    }
                    case "Upcoming": {
                        if (new Date() >= voucher.startDate) {
                            voucher.state = "Active"
                            await voucher.save()
                        }
                        break
                    }
                }
            })
        })
        .catch((err) => console.log(err))
}, {
    scheduled: false
});
module.exports = schedule