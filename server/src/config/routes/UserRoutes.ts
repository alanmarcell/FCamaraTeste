import express = require("express");
import UserController = require("./../../controllers/UserController");
import AuthenticationController = require("./../../controllers/AuthenticationController");

var router = express.Router();
class UserRoutes {
    private _userController: UserController;
    private _authenticationController: AuthenticationController;

    constructor() {
        this._userController = new UserController();
        this._authenticationController = new AuthenticationController();
    }

    get routes() {
        var userController = this._userController;
        var authenticationController = this._authenticationController;

        router.post("/users", userController.create);
        router.use(authenticationController.verifyToken)
        router.get("/users", userController.retrieve);
        router.put("/users/:_id", userController.update);
        router.get("/users/:param", userController.findOne);
        router.delete("/users/:_id", userController.delete);

        return router;
    }


}

Object.seal(UserRoutes);
export = UserRoutes;