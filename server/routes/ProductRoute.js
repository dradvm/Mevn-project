const express = require('express');
const ProductController = require("../controllers/ProductController");
const ProductRouter = express.Router();


ProductRouter.post("/create", ProductController.createProduct);
ProductRouter.delete("/delete/:id", ProductController.delete);
ProductRouter.get('/detail/:id', ProductController.findOne);
ProductRouter.get('/', ProductController.showAll);
ProductRouter.put('/update/:id', ProductController.updateProduct);
ProductRouter.get('/user/:userId', ProductController.getfromShopId);



module.exports = ProductRouter;
