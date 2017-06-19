import DataAccess = require('../DataAccess');
import IProductModel = require('./../../model/interfaces/ProductModel');

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

  static get schema() {
    var schema = mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      category: {
        type: String,
        required: true
      }
    });

    return schema;
  }
}
var schema = mongooseConnection.model<IProductModel>('Products', ProductSchema.schema);
export = schema;
