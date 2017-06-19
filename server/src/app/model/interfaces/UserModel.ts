import mongoose = require('mongoose');

interface IUserModel extends mongoose.Document {
    name: string;
    password: string;
    admin: boolean;
}

export = IUserModel;
