const express = require("express");
const OrderController = require("../controllers/OrderController")
const OrderRouter = express.Router()


OrderRouter.delete("/:id", OrderController.delete)
OrderRouter.post("/findOrders", OrderController.findOrders)
OrderRouter.get("/delete/:id", OrderController.delete)
OrderRouter.post("/addOrder", OrderController.addOrder)
OrderRouter.get("/", OrderController.showAll);

module.exports = OrderRouter