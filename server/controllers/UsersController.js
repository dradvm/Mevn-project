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
        .then((data) => {
            if(!email){
                return res.status(401).json({ massage: `Không tìm thấy tài khoản` })
            } else if(!password){
                return res.status(401).json({ massage: `Sai mật khẩu` })
            } else return res.status(200).json(data)
        })
        .catch((err) => res.status(500).json({ massage: `Error login! ${err}` }))
    },

    getAll: async (req, res) => {
        UsersModel.find({})
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ massage: "Error login!" }))
    },
    getOne: async (req, res) => {
        console.log(req.body)
        UsersModel.findById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(500).json({ massage: "Error login!" }))
            
    }

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