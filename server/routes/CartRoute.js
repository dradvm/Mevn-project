const express = require("express");
const CartController = require("../controllers/CartController")
const CartRouter = express.Router()

CartRouter.post("/checkCart", CartController.checkCart)
CartRouter.post("/create", CartController.createCard)
CartRouter.post("/addProduct", CartController.addProduct)
CartRouter.post("/deleteProduct", CartController.deleteProduct)
CartRouter.post("/editQuantity", CartController.editQuantity)
CartRouter.delete("delete/:id", CartController.deleteCard)
// CartRouter.post("/", CartController.showCardOfUser);
CartRouter.get("/", CartController.showAll);

module.exports = CartRouter