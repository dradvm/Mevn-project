const mongoose = require("mongoose")

function getDateString(date) {
    const pad = (n) => n < 10 ? "0" + n : "" + n
    date = new Date(date)
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const VoucherSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date(),
        get: getDateString
    },
    expiredDate: {
        type: Date,
        required: true,
        get: getDateString
    },
    state: {
        type: String,
        enum: ["Upcoming", "Active", "Expired", "Out Of Stock", "Canceled"],
        required: true
    },
    type: {
        type: String,
        enum: ["Percent One", "Percent Many", "Percent All", "Fixed Money", "First Order", "Quantity"],
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
    ]
}, { toJSON: { getters: true } })

const VoucherModel = mongoose.model("Voucher", VoucherSchema)

module.exports = VoucherModel