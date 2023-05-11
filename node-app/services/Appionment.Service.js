const bcrypt = require("bcrypt");
const { query } = require("express");
const { string, any, ref } = require("joi");
const helper = require("../helper/Appionment.helper");

const statuscode_sucess = 200;
const statuscode_Notfound = 404;

const apiboday =
{
    Statuscode: Int32Array,
    Message: string,
    Data: any
}
function apibodyconstruct(statuscode, message, bodymessage) {
    apiboday.Message = message;
    apiboday.Statuscode = statuscode,
        apiboday.Data = bodymessage

    return apiboday;
}

const AppionmentService = {

    async userAppionmentService(req, res) {
        try {

            //body validation
            const appionmentUser = await helper.ValidateAppoinment(req.body);

            //if status true
            if (appionmentUser.Status) {

                const userAllreayAppionment = await helper.CheckAppointmentAllReadyExist(req.body["Email"], req.body["Date"])
                console.log("APPIONMENT", userAllreayAppionment)

                if (userAllreayAppionment.length == 0) {
                    const addname =`${req.body["Firstname"]}${req.body["Lastname"]}`

                    req.body["Fullname"] = addname;

                    const createApoointment = await helper.create(req.body);

                    if (createApoointment) {

                        return res.send(apibodyconstruct(statuscode_sucess, "appionment create sucess fully", ""));
                    }
                    else {
                        return res.send(apibodyconstruct(statuscode_Notfound, "appionment not created sucess fully", ""));
                    }

                } else {
                    return res.send(apibodyconstruct(statuscode_Notfound, " one user perday one appionment only", ""));
                    // appionment alredy created for this emailid
                }
            } else {

                return res.send(apibodyconstruct(statuscode_Notfound, appionmentUser.Message, ""));
            }
        }
        catch (execption) {
            console.log(execption);

        }


    },

    async getAllUsers(req, res) {
        try {
            const allUser = await helper.find(req.body);
            console.log("DATA", allUser);

            res.send(allUser);
        }
        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }



    },

    async getPatientVisityHistory(req, res) {
        try {
            const allaptient = await helper.findGetPatientVisityHistory();
            console.log("GET PATIENTVISITY", allaptient);
            console.log("ALLUSERS");
            const { Fullname } = req.query;
            console.log("DATEQURY", Fullname);
          const  data = allaptient.filter((history) => history.Fullname == Fullname)
            console.log("IFVALIDATION", data);
            res.send(data);
        }
        //     const data = await helper.findGetPatientVisityHistory();
        //     console.log("GET PATIENTVISITY", data);
        //     console.log("ALLUSERS");
        //     //     let currentDoctorfullname= new Date().toJSON().slice(0, 10);
        //     // console.log(currentDate); // "2022-06-17"
        //     res.send(data);
        // }
        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }



    },
    async getCurrentDayAppionmentPatientList(req, res) {
        try {

            const allUser = await helper.find();
            console.log("ALL USER", allUser);

            const { Date } = req.query;
            console.log("DATEQURY", Date);
            data = allUser.filter((history) => history.Date == Date)
            console.log("IFVALIDATION", data);


            // return res.send(apibodyconstruct(statuscode_sucess, " one user perday one appionment only",  data));
            res.send(data);
        }
        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }
    },

    async PatientListRecptionModuleT(req, res) {

        const PatientList = await helper.find()
        console.log("RECPTION MODULE PATIENT LIST", PatientList);

        res.send(PatientList);


    },

    async DoctorListPatientModule(req, res) {
        console.log("STEP==1");
        try {
            console.log("STEP==1");
            const currentPatient = await helper.findGetPatientVisityHistory();
            console.log("CurrentDayAppionment", currentPatient);
            console.log("STEP==2");
            const {Fullname}=req.query;
            console.log("FIND DATA",Fullname);
            console.log("STEP==3");
             const DoctorCurrentPatientdata =currentPatient.filter((values)=>values.Fullname==Fullname );
            console.log("STEP==4");
            res.send( DoctorCurrentPatientdata);
        }

    
    catch(err){
console.log("error1234");
    }

        // const DoctorList = await helper.findUsers(req.body["Usertype"] = 2);
        // console.log("Doctor List Patient Module", DoctorList);

        // res.send(DoctorList);


    },

    async AssignDoctor(req, res) {
        console.log("errorssss");
        try {
            const AssginDoctorList = await helper.findUsers(req.body["Usertype"] = 2);
            console.log("ASSGIN DOCTOR", AssginDoctorList);


            res.send(AssginDoctorList);



        }

        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }





    },

    async patientVatilas12(req, res) {
        try {
            console.log("ERROR1");
            const patientVatilasUser = await helper.ValidatePatientvatilas(req.body);
            console.log("ERROR12", patientVatilasUser);

            if (patientVatilasUser.Status) {
                console.log("ERROR123", patientVatilasUser);
                const addname = `${req.body["Firstname"]}${req.body["Lastname"]}`;
                req.body["Fullname"] = addname;
                const createPatientVatilas = await helper.createPatientVatilas(req.body);
                console.log("ERROR1234");
                if (createPatientVatilas) {

                    return res.send(apibodyconstruct(statuscode_sucess, "AssginDoctor create sucess fully", ""));
                }
                else {
                    return res.send(apibodyconstruct(statuscode_Notfound, "appionment not created sucess fully", ""));
                }

            }
            else {

                return res.send(apibodyconstruct(statuscode_Notfound, patientVatilasUser.Message, ""));
            }
        }
        catch {
            console.log("404")
        }

    },

    async doctormoduleallpatient(req, res) {
        try {
            const allaptient = await helper.findGetPatientVisityHistory();
            console.log("GET PATIENTVISITY", allaptient);
            console.log("ALLUSERS");
            const { Doctorfullname } = req.query;
            console.log("DATEQURY", Doctorfullname);
            data = allaptient.filter((history) => history.Doctorfullname == Doctorfullname)
            console.log("IFVALIDATION", data);
            res.send(data);
            // res.send(allaptient);
        }
        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }
    },

    async doctorModuleCurrentPatientList(req, res) {
        try {
            console.log("STEP==1");
            const currentPatient = await helper.findGetPatientVisityHistory();
            console.log("CurrentDayAppionment", currentPatient);
            console.log("STEP==2");
            const {Doctorfullname,Date}=req.query;
            console.log("FIND DATA",Doctorfullname,Date);
            console.log("STEP==3");
             const DoctorCurrentPatientdata =currentPatient.filter((values)=>values.Doctorfullname === Doctorfullname &&values.Date === Date );
            console.log("STEP==4");
            res.send( DoctorCurrentPatientdata);
        }

    
    catch(err){
console.log("error1234");
    }
}

}




module.exports = AppionmentService;