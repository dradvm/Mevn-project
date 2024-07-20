const ProductModel = require("../models/ProductModel");

const ProductController = {
    showAll: async (req, res) => {
        ProductModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findOne: async(req, res) => {
        console.log(req.body)
        const{name_product} =  req.body
        ProductModel.find({name_product})
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },
    delete: async (req, res) => {
        ProductModel.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({ message: "Deleted" }))
            .catch((err) => res.status(500).json({ message: err.message }))
    },
    createProduct: async (req, res) => {
        ProductModel.create(req.body)
            .then((data) => res.status(200).json({ message: "Tạo SP thành công" }))
            .catch((err) => {
                console.log(err)
                res.status(500).json(err.message)
            })
    }
}

module.exports = ProductController