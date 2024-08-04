const express = require('express');
const ProductController = require("../controllers/ProductController");
const ProductRouter = express.Router();


ProductRouter.post("/create", ProductController.createProduct);
ProductRouter.delete("/delete/:id", ProductController.delete);
ProductRouter.get('/detail/:id', ProductController.findOne);
ProductRouter.get('/', ProductController.showAll);
<<<<<<< HEAD
ProductRouter.put('/update/:id', ProductController.updateProduct);
ProductRouter.get('/user/:userId', ProductController.getfromShopId);



=======
ProductRouter.get('/productByShop/:id', ProductController.getProductByShop);
// ProductRouter.get('/:fromShopId', ProductController.getfromShopId)
>>>>>>> fc2e1c5ad11dddf5a591dfb36d780e345834ceba
module.exports = ProductRouter;
