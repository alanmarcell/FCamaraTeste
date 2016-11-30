import BaseBusiness = require("./../BaseBusiness");
import IUserModel = require("./../../model/interfaces/UserModel");

interface UserBusiness extends BaseBusiness<IUserModel> {

}
export = UserBusiness;