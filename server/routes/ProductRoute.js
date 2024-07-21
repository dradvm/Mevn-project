const express = require('express')
const ProductController = require("../controllers/ProductController")
const ProductRouter = express.Router()

ProductRouter.post("/create", ProductController.createProduct)
ProductRouter.delete("delete/:id", ProductController.delete)
ProductRouter.post('/detail', ProductController.findOne)
ProductRouter.get('/', ProductController.showAll)
module.exports = ProductRouter