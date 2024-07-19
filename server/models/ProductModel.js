const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema ({
    
    name_product: {
        type: String, 
        required: true,
        unique: true
    },

    screen: {type: String},

    operating_system: {type: String},

    front_camera: {type: String},

    rear_camera: {type: String},

    chip: {type: String},

    ram: {type: String},

    Storage_capacity: {type: String},

    pin: {type: String},

    charger: {type: String},

    image: {type: String},

    video: {type: String},

    price: {type: String},
})

const ProductModel = mongoose.model("Product", ProductSchema)
module.exports = ProductModel