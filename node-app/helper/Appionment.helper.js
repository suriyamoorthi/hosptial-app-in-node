const db = require("../shared/mongo");
const { ObjectId } = require("mongodb");
const { bool, string } = require("joi");
const { json } = require("express");



const AppionmentSechma = {
    Status: bool,
    Message: ""

}

function Emailvalidation(mail) {
    // console.log("ojjfd")

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log("ojjfd456")
    if (mail.match(validRegex)) {

        return true;
    } else {
        return false;
    }
}



function Validation(jsonvalue) {
    try {
        console.log(jsonvalue);
        // var obj = validtionmessage;
        var firstName = jsonvalue["Firstname"];
        var lastname = jsonvalue["Lastname"];
        var email = jsonvalue["Email"];
        // var password = jsonvalue["Password"];
        var gender = jsonvalue["Gender"];
        var phonenumber = jsonvalue["Phonenumber"];
        // var date = jsonvalue["Date"];
        var address = jsonvalue["Address"];
        var city = jsonvalue["City"];
        var pincode = jsonvalue["Pincode"];

        console.log("Sucess");
        if (!firstName) {
           AppionmentSechma.Message = "Need First Firstname";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!lastname) {
           AppionmentSechma.Message = "Need Lasttname";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!email) {
           AppionmentSechma.Message = "Email is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!Emailvalidation(email)) {
           AppionmentSechma.Message = "Enter Valid Email";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        // else if (!password) {
        //    AppionmentSechma.Message = "Password is require";
        //    AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        else if (!gender) {
           AppionmentSechma.Message = "Gender is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!phonenumber) {
           AppionmentSechma.Message = "Phonumber is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (String(phonenumber).length <= 9) {
           AppionmentSechma.Message = "Phonumber  10 required";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        // else if (!date) {
        //    AppionmentSechma.Message = "Date is require";
        //    AppionmentSechma.Status = false;
        //     return AppionmentSechma;
        // }
        else if (!address) {
           AppionmentSechma.Message = "Address is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!city) {
           AppionmentSechma.Message = "City is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!pincode) {
           AppionmentSechma.Message = "Pincode is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else {
            console.log("Sucess1");
           AppionmentSechma.Message = "Success";
           AppionmentSechma.Status = true;
            return AppionmentSechma;

        }
    }
    catch (err) {
        console.log(err);

    }
}


function AssignDoctorValidation(jsonvalue){
    try {
        console.log(jsonvalue);
        // var obj = validtionmessage;
        var department =jsonvalue["Department"];
        var doctorfirstname=jsonvalue["Doctorfirstname"];
        var temp =jsonvalue["Temp"];
        var Bp =jsonvalue["Bp"];
        var weight =jsonvalue["Weight"];
        var height =jsonvalue["Height"];
        var firstName = jsonvalue["Firstname"];
        var lastname = jsonvalue["Lastname"];
        var email = jsonvalue["Email"];
        // var password = jsonvalue["Password"];
        var gender = jsonvalue["Gender"];
        var phonenumber = jsonvalue["Phonenumber"];
        var date = jsonvalue["Date"];
        var address = jsonvalue["Address"];
        var city = jsonvalue["City"];
        var pincode = jsonvalue["Pincode"];

        console.log("Sucess");
        if (!department) {
            AppionmentSechma.Message = "Need First  department";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
         if (!doctorfirstname) {
            AppionmentSechma.Message = "Need First doctorfirstname";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
         if (!temp) {
            AppionmentSechma.Message = "Need First temp";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
         if (!Bp) {
            AppionmentSechma.Message = "Need First Bp";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
         if (!weight) {
            AppionmentSechma.Message = "Need First weight";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
         if (!height) {
            AppionmentSechma.Message = "Need First height";
            AppionmentSechma.Status = false;
             return AppionmentSechma;
 
         }
        if (!firstName) {
           AppionmentSechma.Message = "Need First Firstname";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!lastname) {
           AppionmentSechma.Message = "Need Lasttname";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!email) {
           AppionmentSechma.Message = "Email is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!Emailvalidation(email)) {
           AppionmentSechma.Message = "Enter Valid Email";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        // else if (!password) {
        //    AppionmentSechma.Message = "Password is require";
        //    AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        else if (!gender) {
           AppionmentSechma.Message = "Gender is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!phonenumber) {
           AppionmentSechma.Message = "Phonumber is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (String(phonenumber).length <= 9) {
           AppionmentSechma.Message = "Phonumber  10 required";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        // else if (!date) {
        //    AppionmentSechma.Message = "Date is require";
        //    AppionmentSechma.Status = false;
        //     return AppionmentSechma;
        // }
        else if (!address) {
           AppionmentSechma.Message = "Address is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!city) {
           AppionmentSechma.Message = "City is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!pincode) {
           AppionmentSechma.Message = "Pincode is require";
           AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else {
            console.log("Sucess1");
           AppionmentSechma.Message = "Success";
           AppionmentSechma.Status = true;
            return AppionmentSechma;

        }
    }
    catch (err) {
        console.log(err);

    }

}

function PatientVatilasValidation(jsonvalue){
    try{

      var temperature =jsonvalue["Temperature"];
      var bp =jsonvalue["Bp"];
      var weight =jsonvalue["Weight"];
      var height =jsonvalue["Height"];

       if (String(temperature).length <= 4) {
        AppionmentSechma.Message = "temperature 4 required";
        AppionmentSechma.Status = false;
         return AppionmentSechma;
     }
     else if (String(bp).length <= 4) {
        AppionmentSechma.Message = "Bp 4 required";
        AppionmentSechma.Status = false;
         return AppionmentSechma;
     }
     else if (String(weight).length <= 4) {
        AppionmentSechma.Message = " weight 4 required";
        AppionmentSechma.Status = false;
         return AppionmentSechma;
     }
     else if (String(height).length <= 4) {
        AppionmentSechma.Message = " height 4 required";
        AppionmentSechma.Status = false;
         return AppionmentSechma;
     }
     else {
        console.log("Sucess1");
       AppionmentSechma.Message = "Success";
       AppionmentSechma.Status = true;
        return AppionmentSechma;

    }
    }
    catch (err) {
        console.log(err);

    }
}


const userAppionmentHelper = {
    ValidateAppoinment(appionmentUser) {

        try {
            console.log("entre");
            return Validation(appionmentUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    AssaginDoctorValidationAppionment(AssignDoctorUser) {

        try {
            console.log("entre");
            return AssignDoctorValidation(AssignDoctorUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    PatientVatilas(patientVatilasUser) {

        try {
            console.log("entre");
            return PatientVatilasValidation(patientVatilasUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    async CheckAppointmentAllReadyExist(Email, Date) {
        try {
           return await db.Appionment.find({Email,Date}).toArray();
           
        } catch (execption) {
            console.log(execption);
        }

        
    },
    async getUser(Date) {
        try {
           return await db.Appionment.find({Date}).toArray();
           
        } catch (execption) {
            console.log(execption);
        }

        
    },
    find() {
        return db.Appionment.find().toArray();
    },
    
    findUsers(Usertype) {
        console.log("Emailid", Usertype);
        return db.Users.find({Usertype}).toArray();
    },
    findById(_id) {
        return db.Appionment.findOne({ _id: ObjectId(_id)});
    },
    // findByDate(Date) {
    //     return db.Appionment.find({Date});
    // },
    create(user1) {
        console.log("moorthi");
        return db.Appionment.insertOne(user1);
    },

    createPatientVatilas() {
        return db.PatientDetails.insertOne();
    },

   
}



module.exports = userAppionmentHelper;