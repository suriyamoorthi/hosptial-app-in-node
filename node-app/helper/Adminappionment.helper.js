const db = require("../shared/mongo");
const { bool, string } = require("joi");
const { ObjectId } = require("mongodb");
// const { create } = require("./Appionment.helper");

const adimSechma = {
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

function doctorValidation(jsonValue) {
    try {
        var doctorfirstname = jsonValue["Doctorfirstname"];
        var doctorlastname = jsonValue["Doctorlastname"];
        var department = jsonValue["Department"];
        var exprience = jsonValue["Exprience"];
        var email = jsonValue["Email"];
        var password = jsonValue["Password"];
        var confirmpassword = jsonValue["Confirmpassword"];
        var phonenumber = jsonValue["Phonenumber"];
        var gender = jsonValue["Gender"];
        var dateofbirth = jsonValue["Dateofbirth"];
        var doctordetails = jsonValue["Doctordetails"];
        var address = jsonValue["Address"];
        var file = jsonValue["File"];

        if (!doctorfirstname) {
            adimSechma.Message = "Doctor Firstname is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!doctorlastname) {
            adimSechma.Message = "Doctor Lastname is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!department) {
            adimSechma.Message = "Department is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!exprience) {
            adimSechma.Message = "Exprience is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!email) {
            adimSechma.Message = "Email is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!Emailvalidation(email)) {
            adimSechma.Message = "Email is not Valid";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!password) {
            adimSechma.Message = "Password is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!confirmpassword) {
            adimSechma.Message = "Confirmpassword is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (password !== confirmpassword) {
            adimSechma.Message = "Password is Mismatch";
            adimSechma.Status = false;
            return adimSechma;
        }

        else if (!phonenumber) {
            adimSechma.Message = "Phonenumber is Mismatch";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (String(phonenumber).length <= 9) {
            adimSechma.Message = "Phonenumber must have 10 digts";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!gender) {
            adimSechma.Message = "Gender is Mismatch";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!dateofbirth) {
            adimSechma.Message = "Dateofbirth is Mismatch";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!doctordetails) {
            adimSechma.Message = "Doctordtails is Mismatch";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!address) {
            adimSechma.Message = "Address is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else if (!file) {
            adimSechma.Message = "Fils is require";
            adimSechma.Status = false;
            return adimSechma;
        }
        else {
            adimSechma.Message = "Successs";
            adimSechma.Status = true;
            return adimSechma;
        }

    }
    catch (err) {
        console.log({ error: err.message });

    }

};

function receptionValidate(jsonValue){
    var receptionfirstname = jsonValue["Receptionfirstname"];
    var receptionlastname = jsonValue["Receptionlastname"];
    var email = jsonValue["Email"];
    var password = jsonValue["Password"];
    var confirmpassword = jsonValue["Confirmpassword"];
    var phonenumber = jsonValue["Phonenumber"];
    var dateofbirth = jsonValue["Dateofbirth"];
    var gender = jsonValue["Gender"];
    var address = jsonValue["Address"];
    var file = jsonValue["File"];

    if(!receptionfirstname){
        adimSechma.Message="Reception Firstname is require";
        adimSechma.Status = false;
        return adimSechma;
    }
   else if(!receptionlastname){
        adimSechma.Message="Reception Lastname is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!email){
        adimSechma.Message="Email is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!Emailvalidation(email)){
        adimSechma.Message="email is invalid";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!password){
        adimSechma.Message="Password is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!confirmpassword){
        adimSechma.Message="Confirmpassword is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(password !== confirmpassword){
        adimSechma.Message="Password is Mismatch";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!phonenumber){
        adimSechma.Message="Phonenumber is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(String(phonenumber).length<=9){
        adimSechma.Message="Phonenumber is must have 10 digts";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!dateofbirth){
        adimSechma.Message="Datrofbirth is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!gender){
        adimSechma.Message="Gender is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!address){
        adimSechma.Message="Address is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else if(!file){
        adimSechma.Message="File is require";
        adimSechma.Status = false;
        return adimSechma;
    }
    else {
        adimSechma.Message="Success";
        adimSechma.Status = true;
        return adimSechma;
    }

}






const adminAppionmentHelper = {

    addDoctorValidation(doctor) {
        try {
            return doctorValidation(doctor)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);

        }
    },

    addReceptionValidation(reception){
        try{
            return receptionValidate(reception)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);

        }

    },

   

    async findByEmail(Email) {
        console.log("Emailid", Email);
        return await db.Users.find({ Email }).toArray();

    },
    create(user) {
        return db.Users.insertOne(user);
    }

}

module.exports = adminAppionmentHelper;