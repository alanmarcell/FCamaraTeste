import BaseBusiness = require('./../BaseBusiness');
import IUserModel = require('./../../model/interfaces/UserModel');

interface IUserBusiness extends BaseBusiness<IUserModel> { }

export = IUserBusiness;
