const UsersModel = require("../models/UsersModel");

const UsersController = {
    createUser: async(req, res) => {
        const {name, address, birthday, email, gender, password, phone} = req.body
        console.log(req.body)
        UsersModel.create({
            name: name, 
            address: address, 
            birthday: birthday, 
            email: email,
            gender: gender,
            password: password,
            phone: phone
        })
        .then((data) => res.status(200).json(data))
        .catch((err) => {
            res.status(500).json({ massage: `Can't create user ${err}` })
            console.log(err)
        })
    },
    login: async(req, res) => {
        // console.log(req.body)
        const{email, password} =  req.body
        UsersModel.find({email, password})
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ message: `Error login! ${err}` }))
    },
    checkAccount: async (req, res) => {
        const{email} =  req.body
        UsersModel.find({email})
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ message: `Error checkAccount! ${err}` }))
    },

    getAll: async (req, res) => {
        UsersModel.find({})
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err))
    },
    getUserByEmail: async (req, res) => {
        console.log(req.params.email)
        UsersModel.findOne({
            email: req.params.email
            
        })
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json(err))
    },

    updateUser: async (req, res) => {
        console.log(req.params.email)
        UsersModel.updateOne({
            email: req.params.email
        
        }, req.body)
        .then((data) => res.status(200).json({ message: "Cập nhật thông tin thành công" }))
        .catch((err) => {
            res.status(500).json(err.message)
        })
    },
    
}
module.exports = UsersController