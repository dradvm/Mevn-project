const VoucherModel = require("../models/VoucherModel");

const randomstring = require("randomstring");


const available = ["Upcoming", "Active"]
const notAvailable = ["Expired", "Out Of Stock", "Canceled"]
const voucherType = ["Percent One", "Percent All", "Fixed One", "Fixed All", "First Order Percent", "First Order Fixed"]

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
    },
    deleteItem: async (req, res) => {
        VoucherModel.deleteOne({
            _id: req.params.id
        })
            .then((data) => res.status(200).json({ message: "Xóa voucher thành công!" }))
            .catch((err) => res.status(500).json(err.message))
    },
    isExist: async (req, res) => {
        VoucherModel.countDocuments({
            code: req.params.code
        })
            .then((data) => res.status(200).json({ isExist: data !== 0 ? true : false }))
            .catch((err) => res.status(500).json(err.message))
    },
    getRandomCode: async (req, res) => {
        var newCode = null
        while (!newCode) {
            var randomCode = randomstring.generate({
                charset: "alphanumeric",
                length: 8
            })
            var existCode = await VoucherModel.findOne({ code: randomCode })
            if (!existCode) {
                newCode = randomCode
            }
        }
        res.json(newCode.toUpperCase())
    },
    getVoucherType: async (req, res) => {
        res.json(voucherType)
    },
    createVoucher: async (req, res) => {
        VoucherModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo voucher thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
}

module.exports = VoucherController