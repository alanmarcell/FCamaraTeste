import express = require('express');
import ProductBusiness = require('./../app/business/ProductBusiness');
import IBaseController = require('./BaseController');
import IProductModel = require('./../app/model/interfaces/ProductModel');

class ProductController implements IBaseController<ProductBusiness> {

  create(req: express.Request, res: express.Response): void {
    try {
      const product: IProductModel = <IProductModel> req.body;
      const productBusiness = new ProductBusiness();
      productBusiness.create(product, (error, result) => {
        if (error) res.send({ 'error': 'error create controller' });
        else res.send({ 'success': 'success' });
      });
    } catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      const product: IProductModel = <IProductModel> req.body;
      const id: string = req.params._id;
      const productBusiness = new ProductBusiness();
      productBusiness.update(id, product, (error, result) => {
        if (error) res.send({ 'error': 'error update controller' });
        else res.send({ 'success': 'success' });
      });
    }
    catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });

    }
  }

  delete(req: express.Request, res: express.Response): void {
    try {
      const id: string = req.params._id;
      const productBusiness = new ProductBusiness();
      productBusiness.delete(id, (error, result) => {
        if (error) res.send({ 'error': 'error delete controller' });
        else res.send({ 'success': 'success' });
      });
    } catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });
    }
  }

  retrieve(req: express.Request, res: express.Response): void {
    var pagConfig: any = req.body;
    try {
      var productBusiness = new ProductBusiness();
      productBusiness.retrieve((error, result) => {
        if (error) res.send({ 'error': 'error retrieve' });
        else res.send(result);
      }, pagConfig.start, pagConfig.items);
    } catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });
    }
  }

  findById(req: express.Request, res: express.Response): void {
    try {
      const id: string = req.params._id;
      const productBusiness = new ProductBusiness();
      productBusiness.findById(id, (error, result) => {
        if (error) res.send({ 'error': 'error findById' });
        else res.send(result);
      });
    } catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });
    }
  }
}

export = ProductController;
