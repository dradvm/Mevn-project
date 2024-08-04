const ProductModel = require("../models/ProductModel");
const ProductController = {
    showAll: async (req, res) => {
        ProductModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findOne: async (req, res) => {
        // console.log(req.params.id)
        const targetId = req.params.id
        ProductModel.findById(targetId)
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
        try {
            const product = new ProductModel(req.body);
            const savedProduct = await product.save();
            res.status(200).json({ message: "Sản phẩm đã được tạo thành công", data: savedProduct });
        } catch (err) {
            console.error('Lỗi khi tạo sản phẩm:', err);
            res.status(500).json({ message: "Lỗi khi tạo sản phẩm", error: err.message });
        }
    },
    getProductByShop: async (req, res) => {
        ProductModel.find({
            fromShopId: req.params.id
        })
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    }

    // getfromShopId: async (req, res) => {
    //     console.log(req.params.fromShopId)
    //     ProductModel.findOne({
    //         fromShopId: req.params.fromShopId

    //     })
    //     .then((data) => res.status(200).json(data))
    //     .catch((err) => res.status(500).json(err))
    // },
}

module.exports = ProductController