import DataAccess = require('../DataAccess');
import IProductModel = require('./../../model/interfaces/ProductModel');

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class ProductSchema {

  static get schema() {
    const schema = mongoose.Schema({
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

const schema = mongooseConnection.model<IProductModel>('Products', ProductSchema.schema);
export = schema;
