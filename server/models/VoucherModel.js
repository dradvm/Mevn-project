const mongoose = require("mongoose")

const VoucherSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date()
    },
    expiredDate: {
        type: Date,
        required: true
    },
    state: {
        type: String,
        enum: ["Waiting", "Active", "OutDated", "OutStock", "Cancel"],
        required: true
    },
    type: {
        type: String,
        enum: ["PercentOne", "PercentMany", "PercentAll", "FixedMoney", "FirstOrder", "Quantity"],
        required: true
    },
    condition: {
        type: String,
        enum: ["<=", ">=", "null", "quantity"],
        required: true,
    },
    discount: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: "Discount must be greater than 0"
        }
    },
    maxDiscount: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => value > 0,
            message: "Max discount must be greater than 0"
        }
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
                validator: (value) => value <= this.quantity,
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
    ]
})

const VoucherModel = mongoose.model("Voucher", VoucherSchema)

module.exports = VoucherModel