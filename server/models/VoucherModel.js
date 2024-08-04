const mongoose = require("mongoose")


const VoucherSchema = new mongoose.Schema({
    code: {
        type: String,
        min: 8,
        max: 8,
        required: true,
        unique: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date(),
    },
    expiredDate: {
        type: Date,
        required: true,
    },
    state: {
        type: String,
        enum: ["Upcoming", "Active", "Expired", "Out Of Stock", "Canceled"],
        required: true
    },
    type: {
        type: String,
        enum: ["Percent One", "Percent All", "Fixed One", "Fixed All", "First Order Percent", "First Order Fixed"],
        required: true
    },
    condition: {
        type: String,
        enum: ["<=", ">=", ""],
        default: null
    },
    discount: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 0,
            message: "Discount must be greater than or equal 0"
        },
        default: null
    },
    maxDiscount: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 0,
            message: "Max discount must be greater than or equal 0 "
        },
        default: null
    },
    conditionDiscount: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value >= 0,
            message: "Condition discount must be greater than or equal 0"
        },
        default: null
    },
    quantity: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => Number.isInteger(value),
            message: "Quantity must be Integer"
        },
        min: 1
    },
    usedQuantity: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        validate: [
            {
                validator: (value) => Number.isInteger(value),
                message: "Used Quantity must be Integer"
            },
            {
                validator: function (value) {
                    return value <= this.quantity
                },
                message: "Used Quantity must less or equal Quantity"
            }
        ]
    },
    limitEachUser: {
        type: Number,
        required: true,
        default: 1,
        min: 1,
        validate: {
            validator: (value) => Number.isInteger(value),
            message: "Limit Each User must be Integer"
        },
    },
    applicableProducts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    shopId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { toJSON: { getters: true } })

const VoucherModel = mongoose.model("Voucher", VoucherSchema)

module.exports = VoucherModel