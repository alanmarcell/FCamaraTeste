import express = require('express');
import UserController = require('./../../controllers/UserController');
import AuthenticationController = require('./../../controllers/AuthenticationController');

var router = express.Router();
class UserRoutes {
  private userController: UserController;
  private authenticationController: AuthenticationController;

  constructor() {
    this.userController = new UserController();
    this.authenticationController = new AuthenticationController();
  }

  get routes() {
    var userController = this.userController;
    var authenticationController = this.authenticationController;

    router.post('/users', userController.create);
    router.use(authenticationController.verifyToken);
    router.get('/users', userController.retrieve);
    router.put('/users/:_id', userController.update);
    router.get('/users/:param', userController.findOne);
    router.delete('/users/:_id', userController.delete);

    return router;
  }
}

Object.seal(UserRoutes);
export = UserRoutes;
