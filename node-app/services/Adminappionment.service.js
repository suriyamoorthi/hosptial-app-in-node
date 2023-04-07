const bcrypt = require("bcrypt");
const helper = require("../helper/Adminappionment.helper");
const { string, any } = require("joi");


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

const adminAppionmentService = {

   async addDoctor(req, res) {


      const doctor = await helper.addDoctorValidation(req.body);

      if (doctor.Status) {
         req.body["Usertype"] = 2;
         const doctorFindByEmail = await helper.findByEmail(req.body["Email"]);
         delete req.body["Confirmpassword"];
         if (doctorFindByEmail.length == 0) {

            const salt = await bcrypt.genSalt();
            const result = await bcrypt.hash(req.body["Password"], salt);
            req.body["Password"] = result
            console.log("Password", result);
            const addname = `${req.body["Doctorfirstname"]}${req.body["Doctorlastname"]}`
            req.body["Doctorfullname"] = addname;
            console.log("ADD DOCTOR NAME", addname);


            const adddoctor = await helper.create(req.body);
            if (adddoctor) {
               res.send(apibodyconstruct(statuscode_sucess, "Add Doctor is successfully", ""));
            }
            else {
               res.send(apibodyconstruct(statuscode_Notfound, "Add Doctor is not successfully", ""));
            }

         }
         else {
            res.send(apibodyconstruct(statuscode_Notfound, "Add Doctoris not success email is not Valid", ""));

         }
      }
      else {
         res.send(apibodyconstruct(statuscode_Notfound, doctor.Message, ""));
      }
   },

   async addReception(req, res) {

      const reception = await helper.addReceptionValidation(req.body);

      if (reception.Status) {
         req.body["Usertype"] = 3;

         delete req.body["Confirmpassword"];
         const receptionFindByEmail = await helper.findByEmail(req.body["Email"]);
         console.log("EMAILE=ADD", receptionFindByEmail)
         if (receptionFindByEmail.length == 0) {
            const salt = await bcrypt.genSalt();
            const result = await bcrypt.hash(req.body["Password"], salt);
            req.body["Password"] = result
            console.log("Password", result);
            const addname = `${req.body["Receptionfirstname"]} ${req.body["Receptionlastname"]}`
            req.body["Receptionfullname"] = addname;
            console.log("Reception Fullname", addname);

            const createReception = await helper.create(req.body);
            if (createReception) {
               res.send(apibodyconstruct(statuscode_sucess, "reception is successfully Create", ""));
            }
            else {
               res.send(apibodyconstruct(statuscode_Notfound, "reception is not success again try", ""));
            }
         }
         else {
            res.send(apibodyconstruct(statuscode_Notfound, "reception is not success email is not Valid", ""));
         }


      }
      else {
         res.send(apibodyconstruct(statuscode_Notfound, reception.Message, ""));

      }



   },

   async addAdmin(req, res) {
      const addAminUser = await helper.addAdminValidation(req.body);

      console.log("level 1", addAminUser);
      delete req.body["Confirmpassword"];
      if (addAminUser.Status) {
         req.body["Usertype"] = 4;

         const addAminUserFindEmail = await helper.findByEmail(req.body["Email"]);

         if (addAminUserFindEmail.length === 0) {
            const salt = await bcrypt.genSalt();
            const result = await bcrypt.hash(req.body["Password"], salt);
            req.body["Password"] = result
            console.log("Password", result);
            const addname=`${req.body["Adminfirstname"]} ${req.body["Adminlastname"]}`;
            req.body["AdminFullname"]=addname;

            const addAdmindata = await helper.create(req.body)
            if (addAdmindata) {
               res.send(apibodyconstruct(statuscode_sucess, "Admin is Successfully Create"));
            }
            else {
               res.send(apibodyconstruct(statuscode_Notfound, "Admin is not success again try"));
            }

         }

         else {
            res.send(apibodyconstruct(statuscode_Notfound, "Admin is not success email is not Valid", ""));
         }



      }
      else {
         res.send(apibodyconstruct(statuscode_Notfound, addAminUser.Message, ""));
      }

   }






}

module.exports = adminAppionmentService;