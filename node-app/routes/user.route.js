const route =require("express").Router();

const service =require( "../services/user.service" );

route.get("/", service.getAllUser);
route.get("/:id", service.getUserById);
route.post("/", service.createUser);
route.put("/:id", service.updateUser);
route.delete("/:id", service.deleteUser);

module.exports =route;