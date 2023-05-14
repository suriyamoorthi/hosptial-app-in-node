const db = require("../shared/mongo");
const { ObjectId } = require("mongodb");
const { bool, string, cache } = require("joi");
const { json } = require("express");
const { AssignDoctor } = require("../services/Appionment.Service");



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
        var date = jsonvalue["Date"];
        var address = jsonvalue["Address"];
        var city = jsonvalue["City"];
        var pincode = jsonvalue["Pincode"];

        console.log("Sucess APPIONMENT IN GETDATA");
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
        else if (!date) {
            AppionmentSechma.Message = "Date is require";
            AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
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



function Patientvatilas(jsonvalue) {
    try {
        console.log("VALUE", jsonvalue);


        var doctorfullname = jsonvalue["Doctorfullname"];
        var temperature = jsonvalue["Temperature"];
        var Bp = jsonvalue["Bp"];
        var weight = jsonvalue["Weight"];
        var height = jsonvalue["Height"];
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
        // if (!department) {
        //     AppionmentSechma.Message = "Need First  department";
        //     AppionmentSechma.Status = false;
        //      return AppionmentSechma;

        //  }
        if (!doctorfullname) {
            AppionmentSechma.Message = "Need First Doctorfullname";
            AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        if (!temperature) {
            AppionmentSechma.Message = "Need  temp is must";
            AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        else if (!Bp) {
            AppionmentSechma.Message = "Need First Bp";
            AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!weight) {
            AppionmentSechma.Message = "Need First weight";
            AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!height) {
            AppionmentSechma.Message = "Need First height";
            AppionmentSechma.Status = false;
            return AppionmentSechma;

        }
        else if (!firstName) {
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
        else if (!date) {
            AppionmentSechma.Message = "Date is require";
            AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
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

            AppionmentSechma.Message = "Success";
            AppionmentSechma.Status = true;
            return AppionmentSechma;

        }
    }
    catch (err) {
        console.log(err);

    }
}


function DoctorPercription(jsonvalue) {
    console.log("VALUE", jsonvalue);
    try {
        console.log("VALUE ====2");
        var dabletename = jsonvalue["Dabletename"];
        var af = jsonvalue["Af"];
        var bf = jsonvalue["Bf"];
        var morning = jsonvalue["Morning"];
        var evening = jsonvalue["Evening"];
        var night = jsonvalue["Night"];
        var count = jsonvalue["Count"];


        if (dabletename.length == 0 ) {
            AppionmentSechma.Message = "Dabletename is required";
            AppionmentSechma.Status = false;
            return AppionmentSechma;
        }
        // else if (af) {
        //     AppionmentSechma.Message = " Atlest select one";
        //     AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        // else if (bf) {
        //     console.log("VALUE ====2");
        //     AppionmentSechma.Message = "Atlest select one1";
        //     AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        // else if (morning) {
        //     console.log("VALUE ====2");
        //     AppionmentSechma.Message = "Atleast select one checkbox";
        //     AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        // else if (evening) {
        //     console.log("VALUE ====2");
        //     AppionmentSechma.Message = "Atleast select one checkbox1";
        //     AppionmentSechma.Status = false;
        //     return AppionmentSechma;

        // }
        // else if(night){
        //     AppionmentSechma.Message ="Atleast select one checkbox2";
        //     AppionmentSechma.Status=false;
        //     return AppionmentSechma

        // }
        else if(count.length ==0){
            AppionmentSechma.Message ="Dablete Count is require";
            AppionmentSechma.Status=false;
            return AppionmentSechma;

        }
        else {
            console.log("Sucess1");
            AppionmentSechma.Message = "All Validation success";
            AppionmentSechma.Status = true;
            return AppionmentSechma
        }

    }
    catch {

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

    ValidatePatientvatilas(patientVatilasUser) {

        try {
            console.log("entre Patientvatilas");
            return Patientvatilas(patientVatilasUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },


    async ValidationDoctorPercription(precriptionUser) {
        try {
            console.log("ValidationDoctorPercription");
            return DoctorPercription(precriptionUser)
        }

        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }
    },











    async CheckAppointmentAllReadyExist(Email, Date) {
        try {
            return await db.find({ Email, Date }).toArray();

        } catch (execption) {
            console.log(execption);
        }


    },

    async AssignDoctorcheckAppionment(Email, Date) {
        try {
            return await db.PatientDetails.find({ Email, Date }).toArray();
        }
        catch {
            console.log(error.Message);
        }

    },

    async CheckAppointmentAllReadyExist(Email, Date) {
        try {
            return await db.Appionment.find({ Email, Date }).toArray();

        } catch (execption) {
            console.log(execption);
        }


    },

    async CheckAppointmentAllReadyExist(Email, Date) {
        try {
            return await db.Appionment.find({ Email, Date }).toArray();

        } catch (execption) {
            console.log(execption);
        }


    },

    async getBPGraphDetails(Email) {
        try {
            return await db.PatientDetails.find({ Email }).toArray();

        } catch (execption) {
            console.log(execption);
        }

    },
    async getUser(Date) {
        try {
            return await db.Appionment.find({ Date }).toArray();

        } catch (execption) {
            console.log(execption);
        }


    },
    find() {
        return db.Appionment.find().toArray();
    },
    findGetPatientVisityHistory() {
        return db.PatientDetails.find().toArray();
    },

    findUsers(Usertype) {
        console.log("Emailid", Usertype);
        return db.Users.find({ Usertype }).toArray();
    },
    findById(_id) {
        return db.Appionment.findOne({ _id: ObjectId(_id) });
    },
    // findByDate(Date) {
    //     return db.Appionment.find({Date});
    // },
    create(user1) {
        console.log("moorthi");
        return db.Appionment.insertOne(user1);
    },

    createPatientVatilas(User) {
        console.log("moorthi");
        return db.PatientDetails.insertOne(User);

    },

    dctorpercriptiondata(dctorpercription) {
        try {

            return db.PatientPercription.insertOne(dctorpercription);
        }
        catch (error) {
            console.log(error.log);

        }

    }



}



module.exports = userAppionmentHelper;