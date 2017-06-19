import express = require('express');
import AuthenticationController = require('./../../controllers/AuthenticationController');

var router = express.Router();
class AuthenticationRoutes {
  private authenticationController: AuthenticationController;

  constructor() {
    this.authenticationController = new AuthenticationController();
  }

  get routes() {
    var authenticationController = this.authenticationController;

    router.post('/authenticateUser', authenticationController.authenticateUser);

    return router;
  }
}

Object.seal(AuthenticationRoutes);

export = AuthenticationRoutes;
