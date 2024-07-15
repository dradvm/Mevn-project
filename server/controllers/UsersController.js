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
        console.log(req.body)
        const{email, password} =  req.body
        UsersModel.find({email, password})
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ message: `Error login! ${err}` }))
    },
    checkAccount: async(req, res) => {
        console.log(req.body)
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
    // getOne: async (req, res) => {
    //     UsersModel.find({})
    //     .then((data) => {
    //         if(!data){
    //             res.status(404).json({message: `Không tìm thấy ${req.body}` })
    //         }
    //         res.status(200).json(data);
    //     })
    //     .catch((err) => res.status(500).json({ massage: `Error getOne! ${err}` }))
    // },
}
module.exports = UsersController