const VoucherModel = require("../models/VoucherModel");
const ProductModel = require("../models/ProductModel");
const UsersModel = require("../models/UsersModel");
const randomstring = require("randomstring");


const available = ["Upcoming", "Active"]
const notAvailable = ["Expired", "Out Of Stock", "Canceled"]
const voucherType = ["Percent One", "Percent All", "Fixed One", "Fixed All", "First Order Percent", "First Order Fixed"]

const VoucherController = {
    findVoucher: async (req, res) => {
        VoucherModel.findOne({
            code: req.params.code
        })
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findById: async (req, res) => {
        const targetId = req.params.id
        VoucherModel.findById(targetId)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    findVouchers: async (req, res) => {
        const { page, search, check, sort, shopId } = req.query
        const regex = new RegExp(search !== undefined ? search : "")
        var sortObj = JSON.parse(sort)
        var sortValue = Object.keys(sortObj).reduce((obj, sortItem) => {
            obj[sortItem] = sortObj[sortItem] === true ? 1 : -1
            return obj
        }, {})
        VoucherModel.find({
            state: check === "true" ? available : notAvailable,
            code: regex,
            shopId
        })
            .populate({
                path: "applicableProducts",
                select: "name_product"
            })
            .sort(sortValue)
            .skip((page - 1) * 5).limit(5)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    getPagesOfVouchersActive: async (req, res) => {
        const { search, check, shopId } = req.query
        const regex = new RegExp(search !== undefined ? search : "")
        VoucherModel.countDocuments({
            state: check === "true" ? available : notAvailable,
            code: regex,
            shopId
        })
            .then((data) => res.status(200).json({ count: Math.ceil(parseInt(data) / 5) }))
            .catch((err) => res.status(500).json(err.message))
    },
    deleteVoucher: async (req, res) => {
        VoucherModel.deleteOne({
            _id: req.params.id
        })
            .then((data) => res.status(200).json({ message: "Xóa voucher thành công!" }))
            .catch((err) => res.status(500).json(err.message))
    },
    updateVoucher: async (req, res) => {
        VoucherModel.updateOne({
            code: req.params.code
        }, req.body)
            .then((data) => res.status(200).json({ message: "Cập nhật voucher thành công" }))
            .catch((err) => {
                res.status(500).json(err.message)
            })
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
                res.status(500).json(err.message)
            })
    },
    getVoucherListByProduct: async (req, res) => {
        const { idUser } = req.query
        var user = null
        try {
            user = await UsersModel.findOne({
                _id: idUser
            })
        }
        catch (err) {
            console.log(err)
        }
        ProductModel.findOne({
            _id: req.params.id
        })
            .then((data) => {
                var min = new Date()
                var max = new Date()
                min.setDate(min.getDate() - 7)
                max.setDate(max.getDate() + 7)
                return VoucherModel.aggregate([
                    {
                        $match: {
                            shopId: data.fromShopId,
                            startDate: {
                                $gte: min,
                                $lte: max
                            },
                            state: {
                                $in: ["Active", "Upcoming"]
                            }
                        }
                    },
                    {
                        $addFields: {
                            sortOrder: {
                                $switch: {
                                    branches: [
                                        { case: { $eq: ["$type", "Percent One"] }, then: 1 },
                                        { case: { $eq: ["$type", "Fixed One"] }, then: 2 },
                                        { case: { $eq: ["$type", "Percent All"] }, then: 3 },
                                        { case: { $eq: ["$type", "Fixed All"] }, then: 4 },
                                    ],
                                    default: 5
                                }
                            }
                        }
                    },
                    {
                        $sort: {
                            startDate: 1,
                        }
                    },
                    {
                        $sort: {
                            sortOrder: 1,
                        }
                    },
                    {
                        $project: {
                            sortOrder: 0
                        }
                    },
                ])
                    .then((vouchers) => {
                        if (user === null) {
                            res.status(500).json({ message: "User null" })
                            return Promise.reject('Stop execution')
                        }
                        return { vouchers, vouchersUser: user.vouchers }
                    })
            })
            .then((data) => {
                data.vouchers = data.vouchers.filter((voucher) => {
                    if (voucher.usedQuantity < voucher.quantity) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                data.vouchers = data.vouchers.filter((voucher) => {
                    if (data.vouchersUser.filter((item) => item.equals(voucher._id)).length < voucher.limitEachUser) {
                        return true
                    }
                    else {
                        return false
                    }
                })
                data.vouchers = data.vouchers.filter((voucher) => {
                    if (["Percent One", "Fixed One"].includes(voucher.type)) {
                        var arr = voucher.applicableProducts.map((product) => product.toString())
                        if (arr.includes(req.params.id)) {
                            return true
                        }
                        else {
                            return false
                        }
                    }
                    return true
                })
                // console.log(data)
                return data.vouchers
            })
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                console.log(err.message)
                res.status(500).json(err.message)
            })
    },
    saveVoucher: async (req, res) => {
        const { idUser } = req.body
        VoucherModel.findOne({
            _id: req.params.id
        })
            .then((voucher) => {
                if (["Active", "Upcoming"].includes(voucher.state)) {
                    if (voucher.usedQuantity + 1 == voucher.quantity) {
                        return { check: true, state: voucher.state }
                    }
                    else if (voucher.usedQuantity < voucher.quantity) {
                        return { check: false, state: voucher.state }
                    }
                }
                else {
                    if (voucher.state == "Expired") {
                        res.status(500).json({ message: "Voucher hết hạn" })
                    }
                    else if (voucher.state == "Out Of Stock") {
                        res.status(500).json({ message: "Đã hết voucher" })
                    }
                    else if (vocuher.state == "Canceled") {
                        res.status(500).json({ message: "Voucher đã bị hủy" })
                    }
                    else {
                        res.status(500).json({ message: "Lỗi" })
                    }
                    return Promise.reject('Stop execution')
                }
            })
            .then((check) => {
                return UsersModel.findByIdAndUpdate(idUser, {
                    $push: { vouchers: req.params.id }
                })
                    .then((data) => {
                        return VoucherModel.findByIdAndUpdate(req.params.id, {
                            state: check.check ? "Out Of Stock" : check.state,
                            $inc: { usedQuantity: 1 }
                        })
                    })

            })
            .then((data) => res.status(200).json("Thành công"))
            .catch((err) => res.status(500).json(err))
    }
}

module.exports = VoucherController