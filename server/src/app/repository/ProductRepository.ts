import IProductModel = require('./../model/interfaces/ProductModel');
import ProductSchema = require('./../dataAccess/schemas/ProductSchema');
import RepositoryBase = require('./BaseRepository');

class ProductRepository extends RepositoryBase<IProductModel> {
  constructor() {
    super(ProductSchema);
  }
}

Object.seal(ProductRepository);
export = ProductRepository;
