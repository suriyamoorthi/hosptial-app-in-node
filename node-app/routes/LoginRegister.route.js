const route = require ("express").Router();
 const service = require("../services/LoginRegister.service");

 route.post("/registerappionment" , service.registerappionment);
 route.post("/login" , service.login);
 route.put("/forgot" , service.forgot);
//  route.put("/:id", service.forgot);

module.exports =route;