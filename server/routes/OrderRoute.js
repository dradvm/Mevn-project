const express = require("express");
const OrderController = require("../controllers/OrderController")
const OrderRouter = express.Router()


OrderRouter.delete("/:id", OrderController.delete)
OrderRouter.post("/find", OrderController.find)
OrderRouter.get("/", OrderController.showAll);

module.exports = OrderRouter