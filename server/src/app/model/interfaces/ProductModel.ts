import mongoose = require('mongoose');

interface IProductModel extends mongoose.Document {
  _id?: number;
  price: number;
  category: string;
  name: string;
}

export = IProductModel;
