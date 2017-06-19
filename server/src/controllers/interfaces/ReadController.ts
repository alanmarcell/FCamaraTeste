import express = require('express');

interface IReadController {
  retrieve: express.RequestHandler;
  findById: express.RequestHandler;
}

export = IReadController;
