const route = require ("express").Router();
 const service = require("../services/auth.service");

 route.post("/register" , service.register);
 route.post("/login" , service.login);
//  route.post("/appionmentService" , service.appionmentService);

module.exports =route;