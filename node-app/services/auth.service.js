const bcrypt = require("bcrypt");
const { string, any } = require("joi");


const helper = require("../helper/auth.helper");

const statuscode_sucess = 200;
const statuscode_Notfound = 404;

const apiboday =
{
    Statuscode: Int32Array,
    Message: string,
    Data: any
}
const Api_Register =
{
    Usertype: Int32Array,
    Userid: string
}




function apibodyconstruct(statuscode, message, bodymessage) {
    apiboday.Message = message;
    apiboday.Statuscode = statuscode,
        apiboday.Data = bodymessage

    return apiboday;
}

const service = {
    async register(req, res) {

        try {
            //Data Validation
            const user = await helper.validiteRegister(req.body);
            delete user.cPassword;
            console.log("sfdgdgfs");

            //user Exists Validation

            const userExists = await helper.findByEmail(user.email);
            if (userExists) {
                // apiboday.Statuscode =statuscode_Notfound;
                // apiboday.Message = "";
                // apiboday.Data = "";
                return res.send(apibodyconstruct(statuscode_Notfound, "user already exists", ""));

            } else {
                console.log("1342424");

                //Generate Password Hash

                // const salt = await bcrypt.genSalt();
                user.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
                console.log("1342424ffdsfdf");
                //Insert User
                const { insertedId } = await helper.create(user);

                apiboday.Statuscode = statuscode_sucess;
                apiboday.Message = "user registered";
                Api_Register.Userid = insertedId;
                apiboday.Data = JSON.stringify(Api_Register)
                res.send(apiboday);;
            }
        }
        catch (err) {

            res.status(500).send({ error: err.message });

        }

    },




    async login(req, res) {
        try {
            //Data Validation
            const user = await helper.validiteLogin(req.body);
            console.log("fdsgdg");

            //User Exists Validation

            const dbUser = await helper.findByEmail(user.email);
            if (!dbUser)
                return res.status(400).send({ error: "User doesn't exists" });


            //Password Validation
            const isSame = await bcrypt.compare(user.password, dbUser.password);
            if (!isSame)
                return res.status(401).send({ error: "Password Mismatch" });
            res.send({ message: "user logged in", userId: dbUser._id });;
        }

        catch (err) {

            res.status(500).send({ error: err.message });

        }
    },

//     async appionmentService(req, res) {
//         try {

//             //body validation
//             const appionmentUser = await helper.ValidateAppoinment(req.body);

//             //if status true
//             if (appionmentUser.Status) {

//                 const userAllreayAppionment = await helper.CheckAppointmentAllReadyExist(req.body["Email"], req.body["Date"])
//                 if (userAllreayAppionment.length == 0) {

//                     const createApoointment = await helper.create(req.body)

//                     if (createApoointment) {

//                         return res.send(apibodyconstruct(statuscode_sucess, "appionment create sucess fully", ""));
//                     }
//                     else {
//                         return res.send(apibodyconstruct(statuscode_Notfound, "appionment not created sucess fully", ""));
//                     }

//                 } else {
//                     return res.send(apibodyconstruct(statuscode_Notfound, "appionment alredy created for this emailid", ""));
//                 }
//             } else {

//                 return res.send(apibodyconstruct(statuscode_Notfound, appionmentUser.Message, ""));
//             }
//         }
//         catch (execption) {
//             console.log(execption);

//         }


//     },
}

module.exports = service;