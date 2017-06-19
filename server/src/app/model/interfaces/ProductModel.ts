import mongoose = require('mongoose');

interface IProductModel extends mongoose.Document {
    price: number;
    category: string;
    name: string;
}

export = IProductModel;
