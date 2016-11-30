import mongoose = require("mongoose");

interface UserModel extends mongoose.Document {
    name: string, 
    password: string, 
    admin: boolean 
}

export = UserModel;