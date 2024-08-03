const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
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
    items: [
        {
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
    totalAmount: {
        type: Number
    },
})

const OrderModel = mongoose.model("Order", OrderSchema)
module.exports = OrderModel