const VoucherModel = require("../models/VoucherModel");

const VoucherController = {
    findAll: async (req, res) => {
        VoucherModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findItemsActiveByPage: async (req, res) => {
        console.log(req.params)
        const regex = new RegExp(req.params.search !== undefined ? req.params.search : "")
        VoucherModel.find({
            state: ["Upcoming", "Active"],
            code: regex
        }).skip((req.params.page - 1) * 5).limit(5)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    getPagesOfItemsActive: async (req, res) => {

        const regex = new RegExp(req.params.search !== undefined ? req.params.search : "")
        VoucherModel.countDocuments({
            state: ["Upcoming", "Active"],
            code: regex
        })
            .then((data) => res.status(200).json({ count: Math.ceil(parseInt(data) / 5) }))
            .catch((err) => res.status(500).json(err.message))
    }
}

module.exports = VoucherController