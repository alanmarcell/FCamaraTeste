import mongoose = require('mongoose');

interface IUserModel extends mongoose.Document {
  _id: number;
  name: string;
  password: string;
  admin: boolean;
}

export = IUserModel;
