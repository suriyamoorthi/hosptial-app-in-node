const route =require("express").Router();

const service =require( "../services/Profiles.service" );

route.put("/profileUpdate", service.patientProfileUpdate);
route.put("/ReceptionProfileUpdate",service.ReceptionProfileUpdate);
route.put("/DoctorProfileUpdate",service.DoctorProfileUpdate);
route.put("/AdminProfile",service.AdminProfile);



module.exports = route;