const express = require('express')
const ProductRouter = express.Router()
const ProductController = require("../controllers/ProductController")

ProductRouter.post('/detail', ProductController.findOne)
ProductRouter.get('/', ProductController.showAll)

module.exports = ProductRouter