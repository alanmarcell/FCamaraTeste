import BaseBusiness = require("./../BaseBusiness");
import IProductModel = require("./../../model/interfaces/ProductModel");

interface ProductBusiness extends BaseBusiness<IProductModel> {

}
export = ProductBusiness;