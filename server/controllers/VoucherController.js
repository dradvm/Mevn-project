const VoucherModel = require("../models/VoucherModel");

const VoucherController = {
    findAll: async (req, res) => {
        VoucherModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    countAllDocument: async (req, res) => {
        VoucherModel.estimatedDocumentCount()
            .then((data) => res.status(200).json({ count: parseInt(data / 5) }))
            .catch((err) => res.status(500).json(err.message))
    }
}

module.exports = VoucherController