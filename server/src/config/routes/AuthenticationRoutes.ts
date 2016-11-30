import express = require("express");
import AuthenticationController = require("./../../controllers/AuthenticationController");

var router = express.Router();
class AuthenticationRoutes {
    private _authenticationController: AuthenticationController;

    constructor() {
        this._authenticationController = new AuthenticationController();
    }

    get routes() {
        var authenticationController = this._authenticationController;

        router.post("/authenticateUser", authenticationController.authenticateUser);       

        return router;
    }
}

Object.seal(AuthenticationRoutes);
export = AuthenticationRoutes;