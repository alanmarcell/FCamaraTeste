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

        router.get("/products", controller.retrieve);
        router.post("/products", controller.create);
        router.put("/products/:_id", controller.update);
        router.get("/products/:_id", controller.findById);
        router.delete("/products/:_id", controller.delete);

        return router;
    }


}

Object.seal(ProductRoutes);
export = ProductRoutes;