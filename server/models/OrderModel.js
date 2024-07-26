const mongoose = require("mongoose")

function getDateString(date) {
    const pad = (n) => n < 10 ? "0" + n : "" + n
    date = new Date(date)
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const OrderSchema = mongoose.Schema({
    cartId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    voucher: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }
    ],
    shipping: [
        {
            // type: mongoose.Schema.Types.Mixed,
            address: {
                type: String
            },
            shippingCost: {
                type: Number
            },
            shippingMethod: {
                type: String
            }
        }
    ],
    payment: {
        method: {
            type: String
        },
        statusPayment: {
            type: String
        },
        transactionId: {
            type: String
        },
    },
    totalAmount: {
        type: Number
    },
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

const OrderModel = mongoose.model("Order", OrderSchema)
module.exports = OrderModel