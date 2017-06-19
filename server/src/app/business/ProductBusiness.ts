import ProductRepository = require('./../repository/ProductRepository');
import IProductBusiness = require('./interfaces/ProductBusiness');
import IProductModel = require('./../model/interfaces/ProductModel');

class ProductBusiness implements IProductBusiness {
  private _productRepository: ProductRepository;

  constructor() {
    this._productRepository = new ProductRepository();
  }

  create(item: IProductModel, callback: (error: any, result: any) => void) {
    this._productRepository.create(item, callback);
  }

  retrieve(callback: (error: any, result: any) => void, start?: string, items?: string) {
    console.log('retrive prod start ', start, ' itens ', items, 'TYPE: ', typeof (items));
    this._productRepository.retrieve(callback, start, items);
  }

  update(_id: string, item: IProductModel, callback: (error: any, result: any) => void) {

    this._productRepository.findById(_id, (err, res) => {
      if (err) callback(err, res);

      else
        this._productRepository.update(res._id, item, callback);

    });
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._productRepository.delete(_id, callback);
  }

  findById(_id: string, callback: (error: any, result: IProductModel) => void) {
    this._productRepository.findById(_id, callback);
  }

}


Object.seal(ProductBusiness);
export = ProductBusiness;
