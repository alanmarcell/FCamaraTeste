import mongoose = require("mongoose");

interface ProductModel extends mongoose.Document {
    price: number;
    category: string;
    name: string;
}

export = ProductModel;