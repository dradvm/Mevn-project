const NameModel = require("../models/NameModel")

const NameController = {
    findAll: async (req, res) => {
        NameModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: err.message }))
    },
    delete: async (req, res) => {
        NameModel.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({ message: "Deleted" }))
            .catch((err) => res.status(500).json({ message: err.message }))
    }
}
module.exports = NameController