import IProductModel = require('./interfaces/ProductModel');

class ProductModel {

  private _productModel: IProductModel;

  constructor(productModel: IProductModel) {
    this._productModel = productModel;
  }
  get name(): string {
    return this._productModel.name;
  }

  get price(): number {
    return this._productModel.price;
  }

  get category(): string {
    return this._productModel.category;
  }

}
Object.seal(ProductModel);
export =  ProductModel;
