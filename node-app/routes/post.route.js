const route =require("express").Router();

const service =require( "../services/post.service" );

route.get("/", service.getAllpost);
route.get("/:id", service.getPostById);
route.post("/", service.createPost);
route.put("/:id", service.updatePost);
route.delete("/:id", service.deletePost);



module.exports = route;