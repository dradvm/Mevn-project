const VoucherModel = require("../models/VoucherModel");

const available = ["Upcoming", "Active"]
const notAvailable = ["Expired", "Out Of Stock", "Canceled"]

const VoucherController = {
    findItems: async (req, res) => {
        const { page, search, check, sort } = req.query
        const regex = new RegExp(search !== undefined ? search : "")
        var sortObj = JSON.parse(sort)
        var sortValue = Object.keys(sortObj).reduce((obj, sortItem) => {
            obj[sortItem] = sortObj[sortItem] === true ? 1 : -1
            return obj
        }, {})
        VoucherModel.find({
            state: check === "true" ? available : notAvailable,
            code: regex
        })
            .sort(sortValue)
            .skip((page - 1) * 5).limit(5)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    getPagesOfItemsActive: async (req, res) => {
        const { search, check } = req.query
        const regex = new RegExp(search !== undefined ? search : "")
        VoucherModel.countDocuments({
            state: check === "true" ? available : notAvailable,
            code: regex
        })
            .then((data) => res.status(200).json({ count: Math.ceil(parseInt(data) / 5) }))
            .catch((err) => res.status(500).json(err.message))
    }
}

module.exports = VoucherController