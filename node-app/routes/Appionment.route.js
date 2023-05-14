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
 route.get("/doctormoduleallpatient", Service.doctormoduleallpatient);
 route.get("/doctorModuleCurrentPatientList", Service.doctorModuleCurrentPatientList);
 route.post("/patientVatilas12", Service.patientVatilas12);

 route.get("/BPgeraphdata", Service.BPgeraphdata);
 route.get("/Weightgraph", Service.Weightgraph);
 route.post("/Precription",Service.Precription);
 

 

module.exports =route;