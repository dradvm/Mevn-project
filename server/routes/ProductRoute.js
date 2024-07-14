const express = require('express')
const ProductRouter = express.Router()
const ProductController = require("../controllers/ProductController")

ProductRouter.get('/', ProductController.showAll)

module.exports = ProductRouter