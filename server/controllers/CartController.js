const CartModel = require("../models/CartModel")

const CartController = {
    showAll: async (req, res) => {
        CartModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    checkCart: async(req, res) => {
        console.log(req.body)
        const{userId} =  req.body
        CartModel.find({userId})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    showCardOfUser: async(req, res) => {
        console.log(req.params.id)
        CartModel.find({_id: req.params.id})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkCard of user! ${err}` }))
    },
    addProduct: async (req, res) => {
        CartModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo giỏ hàng thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
    deleteProduct: async (req, res) => {
        CartModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo giỏ hàng thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
    editQuantity: async (req, res) => {
        CartModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo giỏ hàng thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    },
    deleteCard: async (req, res) => {
        CartModel.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({ message: "Deleted" }))
            .catch((err) => res.status(500).json({ message: err.message }))
    },
    createCard: async (req, res) => {
        CartModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo giỏ hàng thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    }
}
module.exports = CartController
