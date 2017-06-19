import BaseBusiness = require('./../BaseBusiness');
import IProductModel = require('./../../model/interfaces/ProductModel');

interface IProductBusiness extends BaseBusiness<IProductModel> { }

export = IProductBusiness;
