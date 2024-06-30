const mongoose = require("mongoose")

const NameSchema = mongoose.Schema({
    name: String
})

const Name = mongoose.model("Name", NameSchema)
module.exports = Name