import express = require("express");
import UserBusiness = require("./../app/business/UserBusiness");
import IUserModel = require("./../app/model/interfaces/UserModel");
var config = require("./../config/constants/constants");
var jwt = require('jsonwebtoken');

class AuthenticationController {

    verifyToken(req, res, next) {
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];

        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, 'fcamara', function(err, decoded) {
                if (err) {
                    res.json({ success: false, message: 'Failed to authenticate token.' });
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;
                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }

    authenticateUser(req: express.Request, res: express.Response): void {
        try {
            var userName: string = req.body.name;
            var userBusiness = new UserBusiness();
            userBusiness.findOne(userName, (error, user) => {
                if (error) res.send({ "error": "error" });
                else {

                    if (!user) {
                        res.json({ success: false, message: 'Authentication failed. User not found.' });
                    } else if (user) {

                        // check if password matches
                        if (user.password != req.body.password) {
                            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                        } else {

                            // if user is found and password is right
                            // create a token
                            var token = jwt.sign(user, "fcamara", {
                                expiresIn: 60 // expires in 60 seconds
                            });
                            // return the information including token as JSON
                            res.json({
                                success: true,
                                message: 'Enjoy your token!',
                                token: token
                            });
                        }
                    }
                }
            });
        }
        catch (e) {
            console.log(e);
            res.send({ "error": "error in your request" });
        }
    }
}

export = AuthenticationController;


