import express = require('express');
import UserBusiness = require('./../app/business/UserBusiness');
import IBaseController = require('./BaseController');
import IUserModel = require('./../app/model/interfaces/UserModel');

class UserController implements IBaseController<UserBusiness> {

  create(req: express.Request, res: express.Response): void {
    try {
      var user: IUserModel = <IUserModel> req.body;
      var userBusiness = new UserBusiness();
      userBusiness.create(user, (error, result) => {
        if (error) res.send({ 'error': 'error' });
        else res.send({ 'success': 'success' });
      });
    } catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });
    }
  }

  update(req: express.Request, res: express.Response): void {
    try {
      var user: IUserModel = <IUserModel> req.body;
      var id: string = req.params._id;
      var userBusiness = new UserBusiness();
      userBusiness.update(id, user, (error, result) => {
        if (error) res.send({ 'error': 'error' });
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

      var id: string = req.params._id;
      var userBusiness = new UserBusiness();
      userBusiness.delete(id, (error, result) => {
        if (error) res.send({ 'error': 'error' });
        else res.send({ 'success': 'success' });
      });
    }
    catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });

    }
  }
  retrieve(req: express.Request, res: express.Response): void {
    try {

      var userBusiness = new UserBusiness();
      userBusiness.retrieve((error, result) => {
        if (error) res.send({ 'error': 'error' });
        else res.send(result);
      });
    }
    catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });

    }
  }
  findById(req: express.Request, res: express.Response): void {
    try {

      var id: string = req.params._id;
      var userBusiness = new UserBusiness();
      userBusiness.findById(id, (error, result) => {
        if (error) res.send({ 'error': 'error' });
        else res.send(result);
      });
    }
    catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });

    }
  }

  findOne(req: express.Request, res: express.Response): void {
    try {
      var param: string = req.params.param;
      var userBusiness = new UserBusiness();
      userBusiness.findOne(param, (error, result) => {
        if (error) res.send({ 'error': 'error' });
        else res.send(result);
      });
    }
    catch (e) {
      console.log(e);
      res.send({ 'error': 'error in your request' });

    }
  }
}

export = UserController;
