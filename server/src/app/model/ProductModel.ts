import IProductModel = require('./interfaces/ProductModel');

class ProductModel {

  private productModel: IProductModel;

  constructor(productModel: IProductModel) {
    this.productModel = productModel;
  }
  get name(): string {
    return this.productModel.name;
  }

  get price(): number {
    return this.productModel.price;
  }

  get category(): string {
    return this.productModel.category;
  }

}
Object.seal(ProductModel);

export =  ProductModel;
