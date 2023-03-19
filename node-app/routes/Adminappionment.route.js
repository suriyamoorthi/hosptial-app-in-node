const route = require("express").Router();
const Service =require("../services/Adminappionment.service");


route.post("/adddoctor" , Service.addDoctor);
route.post("/addreception", Service.addReception);


module.exports =route;