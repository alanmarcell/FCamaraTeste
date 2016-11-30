# Angular2 MEAN - FCamara Test application with ExpressJS, MongoDB, Gulp and Typescript (Repository Pattern)

[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

##Introduction

Basic Angular seed application. It uses ExpressJS along with Mongo DB support (Mongoose) via a wrapper of Repository Pattern as Business layer. It uses JSON web token for authentication.
It also uses Gulp for running task and TsLint.The seed application is built over node and uses latest node packages.

## Prerequisites

1. Latest version of Node to be installed.
2. Test Database hosted on Modulus.io. To change, install MongoDB and make sure it is running then please configure constants.ts and change the connection for mongoDB.


## Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
```

## Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm run build        <= build and compile the dest folder
    npm run deploy       <= start the Nodemon and watch for changes.
```

## Directory Structure

```
angular2-MEAN
    ├── node_modules
    ├── client
    │    ├── app
    │    │    ├── Components
    │    │    │    ├── dashboard
    │    │    │    │    ├── dashboard.component.css
    │    │    │    │    ├── dashboard.component.html
    │    │    │    │    ├── dashboard.component.ts
    │    │    │    ├── login
    │    │    │    │    ├── login.component.css
    │    │    │    │    ├── login.component.html
    │    │    │    │    ├── login.component.css
    │    │    │    ├── productDetail
    │    │    │    │    ├── product-detail.component.html
    │    │    │    │    ├── product-detail.component.ts        
    │    │    │    ├── products
    │    │    │    │    ├── products.component.html
    │    │    │    │    ├── products.component.ts            
    │    │    │    ├── register
    │    │    │    │    ├── register.component.html
    │    │    │    │    ├── register.component.ts
    │    │    │    │    ├── register.component.css    
    │    │    ├── models
    │    │    │    ├── product.ts
    │    │    │    ├── users.ts
    │    │    ├── services                         <= Product Service for fetching api
    │    │    │    ├── product.service.ts    
    │    │    │    ├── user.service.ts          
    │    │    ├── app.component.css
    │    │    ├── app.component.ts
    │    │    ├── app.html
    │    │    ├── app.module.ts
    │    │    ├── app.routing.ts
    │    │    ├── main.ts
    │    ├── typings
    │    ├── index.html
    │    ├── systemjs.config.js
    │    ├── tsconfig.json
    │    ├── typings.json
    ├── server
    │    ├── src
    │    │    ├── app
    │    │    │    ├── business                    <= business logic for application
    │    │    │    │    ├── common
    │    │    │    │    │    ├── Read.ts           <= common Read method
    │    │    │    │    │    ├── Write.ts          <= common Write method
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── ProductBusiness.ts
    │    │    │    │    │    ├── UserBusiness.ts
    │    │    │    │    ├── BaseBusiness.ts
    │    │    │    │    ├── ProductBusiness.ts
    │    │    │    │    ├── UserBusiness.ts
    │    │    │    ├── dataAccess
    │    │    │    │    ├── schemas
    │    │    │    │    │    ├── ProductSchema.ts 
    │    │    │    │    │    ├── ProductSchema.ts    <= Product Schema for MongoDB
    │    │    │    │    ├── DataAccess.ts            <= Connection with MongoDB
    │    │    │    ├── model
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── ProductModel.ts
    │    │    │    │    │    ├── UserModel.ts
    │    │    │    │    ├── ProductModel.ts
    │    │    │    │    ├── UserModel.ts
    │    │    │    ├── repository
    │    │    │    │    ├── interfaces
    │    │    │    │    │    ├── Read.ts
    │    │    │    │    │    ├── Write.ts
    │    │    │    │    ├── BaseRepository.ts
    │    │    │    │    ├── ProductRepository.ts
    │    │    │    │    ├── UserRepository.ts
    │    │    ├── bin
    │    │    │    ├── www
    │    │    ├── config
    │    │    │    ├── constants
    │    │    │    │    ├── constants.ts            <= Constants - mongodb connection string.
    │    │    │    ├── routes
    │    │    │    │    ├── AuthenticationRoutes.ts        <= API Routes like get,post,put,delete
    │    │    │    │    ├── ProductRoutes.ts 
    │    │    │    │    ├── UserRoutes.ts        
    │    │    │    │    ├── Routes.ts               <= fetching all appliction routes here
    │    │    ├── controller
    │    │    │    ├── interfaces
    │    │    │    │    ├── ReadController.ts
    │    │    │    │    ├── WriteController.ts
    │    │    │    ├── BaseController.ts         <= Base Repository controller
    │    │    │    ├── AuthenticationController.ts
    │    │    │    ├── ProductController.ts
    │    │    │    ├── UserController.ts
    │    │    ├── server.ts
    │    ├── typings
    │    ├── tsconfig.json
    │    ├── typings.json
    ├── gulpfile.ts                              <= gulp tasks : clean, build, compile, run.
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── seed.js                                  <= execute on node whith a runing mongoDB
    ├── tsconfig.json
    ├── tslint.json
    
```

## Features (Angular2, Express, Gulp, MongoDB, Node)

1.  Angular 2 Quick Start application (Tours of Product) from https://angular.io/docs/ts/latest/quickstart.html
2.  Added support for Gulp so that js files are moved out of the app folder.
3.  It will create a dist folder where it will place all the js files.
4.  Gulp will monitor for the changes via help of watcher.
5.  Created folder structure for easy access of components, services and models.
6.  Applied tslint for avoiding any typos.
7.  Implemented best practices recomended on the Angular 2 website.
8.  Implemented Express Server to Host API's
9.  Added MongoDB support to communicate our Products data to Database
10. Implemented Repository Pattern to communicate with Mongoose.

## Api Document (from MongoDB)

```
1.  getAll    http://localhost:3000/api/products             <= get all products
2.  getById   http://localhost:3000/api/products/:id         <= get product by Id
4.  post      http://localhost:3000/api/products             <= create product
5.  put       http://localhost:3000/api/products/:id         <= update product
6.  delete    http://localhost:3000/api/products/:id         <= delete product

7.  getAll    http://localhost:3000/api/users                <= get all users
8.  getById   http://localhost:3000/api/users/:id            <= get user by Id
9.  post      http://localhost:3000/api/users                <= create user
10. put       http://localhost:3000/api/users/:id            <= update user
11. delete    http://localhost:3000/api/users/:id            <= delete user

12. post      http://localhost:3000/api/authenticateUser     <= authenticate user

```
## Dependencies

1.  Angular 2
2.  TypeScript
3.  Gulp
4.  ExpressJS
5.  NodeJS
6.  Nodemon
7.  TsLint
8.  MongoDB
9.  Bootstrap
10. Mongoose
11. JSON Web Token
12. Morgan

## License

MIT
