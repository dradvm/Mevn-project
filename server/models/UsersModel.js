const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    birthday:{
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },


    phone: {
        type: String,
        required: true,
    }

    
});



const User = mongoose.model('User', UserSchema);

module.exports = User;