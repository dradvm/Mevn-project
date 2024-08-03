const express = require("express");
const OrderController = require("../controllers/OrderController")
const OrderRouter = express.Router()


OrderRouter.delete("/:id", OrderController.delete)
OrderRouter.post("/findOrders", OrderController.findOrders)
OrderRouter.get("/", OrderController.showAll);

module.exports = OrderRouter