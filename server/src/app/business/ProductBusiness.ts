import ProductRepository = require('./../repository/ProductRepository');
import IProductBusiness = require('./interfaces/ProductBusiness');
import IProductModel = require('./../model/interfaces/ProductModel');

class ProductBusiness implements IProductBusiness {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  create(item: IProductModel, callback: (error: any, result: any) => void) {
    this.productRepository.create(item, callback);
  }

  retrieve(callback: (error: any, result: any) => void, start?: string, items?: string) {
    console.log('retrive prod start ', start, ' itens ', items, 'TYPE: ', typeof (items));
    this.productRepository.retrieve(callback, start, items);
  }

  // tslint:disable-next-line:variable-name
  update(_id: string, item: IProductModel, callback: (error: any, result: any) => void) {
    this.productRepository.findById(_id, (err, res) => {
      if (err) callback(err, res);
      else this.productRepository.update(res._id, item, callback);
    });
  }

  // tslint:disable-next-line:variable-name
  delete(_id: string, callback: (error: any, result: any) => void) {
    this.productRepository.delete(_id, callback);
  }

  // tslint:disable-next-line:variable-name
  findById(_id: string, callback: (error: any, result: IProductModel) => void) {
    this.productRepository.findById(_id, callback);
  }
}

Object.seal(ProductBusiness);
export = ProductBusiness;
