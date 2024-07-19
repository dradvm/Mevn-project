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
}

module.exports = ProductController