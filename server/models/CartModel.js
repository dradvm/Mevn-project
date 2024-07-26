const mongoose = require("mongoose")

function getDateString(date) {
    const pad = (n) => n < 10 ? "0" + n : "" + n
    date = new Date(date)
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const CartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    items: [
        {
            // type: mongoose.Schema.Types.Mixed,
            productId: {
                type: mongoose.Schema.Types.ObjectId,
            },
            priceAtOrdering: {
                type: Number,               
            }, 
            quantity: {
                type: Number,
            },
            properties: {
                type: String
            },
        }
    ],
    createdAt: {
        type: Date,
        required: true,
        default: Date(),
        get: getDateString
    },
    updatedAt: {
        type: Date,
        required: true,
        get: getDateString
    }
})

const CartModel = mongoose.model("Cart", CartSchema)
module.exports = CartModel