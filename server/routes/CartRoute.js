const express = require("express");
const CartController = require("../controllers/CartController")
const CartRouter = express.Router()

CartRouter.get("/exist/:userId", CartController.isExist)
CartRouter.post("/findOne", CartController.findOne)
CartRouter.post("/create", CartController.createCart)
CartRouter.post("/update/:userId", CartController.updateCart)
CartRouter.get("/", CartController.showAll);

module.exports = CartRouter