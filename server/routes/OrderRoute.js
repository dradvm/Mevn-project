const express = require("express");
const OrderController = require("../controllers/OrderController")
const OrderRouter = express.Router()


OrderRouter.delete("/:id", OrderController.delete)
OrderRouter.get("/", OrderController.showAll);

module.exports = OrderRouter