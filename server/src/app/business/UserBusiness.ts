import UserRepository = require('./../repository/UserRepository');
import IUserBusiness = require('./interfaces/UserBusiness');
import IUserModel = require('./../model/interfaces/UserModel');

class UserBusiness implements IUserBusiness {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  create(user: IUserModel, callback: (error: any, result: any) => void) {
    this.userRepository.create(user, callback);
  }

  retrieve(callback: (error: any, result: any) => void) {
    this.userRepository.retrieve(callback);
  }

  // tslint:disable-next-line:variable-name
  update(_id: string, item: IUserModel, callback: (error: any, result: any) => void) {

    this.userRepository.findById(_id, (err, res) => {
      if (err) callback(err, res);
      else this.userRepository.update(res._id, item, callback);
    });
  }

  // tslint:disable-next-line:variable-name
  delete(_id: string, callback: (error: any, result: any) => void) {
    this.userRepository.delete(_id, callback);
  }

  // tslint:disable-next-line:variable-name
  findById(_id: string, callback: (error: any, result: IUserModel) => void) {
    this.userRepository.findById(_id, callback);
  }

  findOne(name: string, callback: (error: any, result: IUserModel) => void) {
    this.userRepository.findOne({ name }, callback);
  }
}

Object.seal(UserBusiness);
export = UserBusiness;
