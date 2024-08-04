const CartModel = require("../models/CartModel")

const CartController = {
    showAll: async (req, res) => {
        CartModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findOne: async(req, res) => {
        console.log(req.body)
        const{userId} =  req.body
        CartModel.find({userId})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    isExist: async (req, res) => {
        console.log(req.params.userId)
        CartModel.countDocuments({userId: req.params.userId})
            .then((data) => res.status(200).json({ isExist: data !== 0 ? true : false }))
            .catch((err) => res.status(500).json(err.message))
    },
    createCart: async (req, res) => {
        console.log(req.body)
        CartModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo giỏ hàng thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
    updateCart: async (req, res) => {
        console.log(req.params.userId)
        console.log(req.body)
        CartModel.findOneAndUpdate({
            userId: req.params.userId
        },{ $push: { items: req.body } },)
            .then((data) => res.status(200).json({ message: "Cập nhật Cart thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
}
module.exports = CartController
