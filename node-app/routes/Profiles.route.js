const route =require("express").Router();

const service =require( "../services/Profiles.service" );

route.put("/profileUpdate", service.patientProfileUpdate);
route.put("/ReceptionProfileUpdate",service.ReceptionProfileUpdate);



module.exports = route;