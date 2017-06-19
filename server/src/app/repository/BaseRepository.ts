import IRead = require("./interfaces/Read");
import IWrite = require("./interfaces/Write");

import mongoose = require("mongoose");

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

  private _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: any) => void) {
    try {
      this._model.create(item, function (err, res) {
        if (err) {
          console.log("error");
          console.log(err);
          console.log("res");
          console.log(res);
        }
        callback(err, res);
      });
    } catch (err) {
      console.log("base repository error");
      console.log(err);
    }

  }

  retrieve(callback: (error: any, result: any) => void, start?: string, items?: string) {
    if (items) {
      console.log('object received start ', start, ' items ', items);
      this._model.find({}, callback).skip(parseInt(start)).limit(parseInt(items));
    }
    else {
      console.log('object NOT REECEIVED');
      this._model.find({}, callback);
    }
  }

  update(_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void) {
    this._model.update({ _id: _id }, item, callback);

  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null));

  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }

  findOne(query: any, callback: (error: any, result: T) => void) {
    this._model.findOne(query, callback);
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id)
  }

}

export = RepositoryBase;
