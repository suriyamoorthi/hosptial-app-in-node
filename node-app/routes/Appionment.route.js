const route = require ("express").Router();
 const Service = require("../services/Appionment.Service");

 route.post("/appionmentService" , Service.userAppionmentService);
 route.get("/", Service.getAllUsers);
 route.get("/getCurrentDayAppionmentPatientList", Service.getCurrentDayAppionmentPatientList);
//  route.get("/:id", Service.getPatientVisityHistory);
 route.get("/getPatientVisityHistory", Service.getPatientVisityHistory);
 route.get("/PatientListRecptionModuleT", Service.PatientListRecptionModuleT);
 route.get("/AssignDoctor", Service.AssignDoctor);
 route.get("/DoctorListPatientModule", Service.DoctorListPatientModule);
 route.get("/patientVatilas12", Service.patientVatilas12);


module.exports =route;