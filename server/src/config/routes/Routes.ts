import express = require('express');

import ProductRoutes = require('../routes/ProductRoutes');
import UserRoutes = require('../routes/UserRoutes');
import AuthenticationRoutes = require('../routes/AuthenticationRoutes');

var app = express();

class Routes {

  get routes() {
    app.use('/', new AuthenticationRoutes().routes);
    app.use('/', new UserRoutes().routes);
    app.use('/', new ProductRoutes().routes);

    return app;
  }
}

export = Routes;
