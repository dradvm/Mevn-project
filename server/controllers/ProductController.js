const ProductModel = require("../models/ProductModel");

const ProductController = {
    showAll: async (req, res) => {
        ProductModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    }
}

module.exports = ProductController