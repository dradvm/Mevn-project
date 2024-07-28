const OrderModel = require("../models/OrderModel")

const OrderController = {
    showAll: async (req, res) => {
        OrderModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: err.message }))
    },
    find: async(req, res) => {
        console.log(req.body)
        const{userId} =  req.body
        OrderModel.find({userId})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    delete: async (req, res) => {
        OrderModel.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({ message: "Deleted" }))
            .catch((err) => res.status(500).json({ message: err.message }))
    }
}
module.exports = OrderController
