const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({

    fromShopId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name_product: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    categories: {
        type: String,
        required: true
    },
    quantityList: [
        {
            properties: {
                type: String
            },
            quantity: {
                type: Number
            }
        }
    ],
    detail: [
        {
            key: {
                type: String
            },
            value: {
                type: String
            }
        }
    ],
    display: {
        coverPhoto: {
            type: String,
            required: true
        },
        video: {
            type: String,
            required: true
        },
        images: [String]
    },
})

const ProductModel = mongoose.model("Product", ProductSchema)
module.exports = ProductModel