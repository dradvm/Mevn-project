const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({

    name_product: {
        type: String,
        required: true,
        unique: true
    },
    screen: {
        type: String,
        required: true
    },
    operating_system: {
        type: String,
        required: true
    },
    front_camera: {
        type: String,
        required: true
    },
    rear_camera: {
        type: String,
        required: true
    },
    chip: {
        type: String,
        required: true
    },
    ram: {
        type: String,
        required: true
    },
    Storage_capacity: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    charger: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fromUserShop: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

const ProductModel = mongoose.model("Product", ProductSchema)
module.exports = ProductModel