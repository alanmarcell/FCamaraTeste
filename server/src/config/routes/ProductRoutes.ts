import express = require("express");
import ProductController = require("./../../controllers/ProductController");

var router = express.Router();
class ProductRoutes {
    private _productController: ProductController;

    constructor () {
        this._productController = new ProductController();
    }
    get routes () {
        var controller = this._productController;
        console.log('routes' );
        router.get("/products", controller.retrieve);
        router.post("/products/", controller.retrieve);
        router.post("/product", controller.create);
        router.put("/product/:_id", controller.update);
        router.get("/product/:_id", controller.findById);
        router.delete("/product/:_id", controller.delete);

        return router;
    }


}

Object.seal(ProductRoutes);
export = ProductRoutes;
