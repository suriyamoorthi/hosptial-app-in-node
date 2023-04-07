const db = require("../shared/mongo");
const { ObjectId } = require("mongodb");
const { bool, string } = require("joi");

const registerSechma = {
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
        var firstname = jsonvalue["Firstname"];
        var lastname = jsonvalue["Lastname"];
        var email = jsonvalue["Email"];
        var password = jsonvalue["Password"];
        var confirmpassword = jsonvalue["Confirmpassword"];
        var phonenumber = jsonvalue["Phonenumber"];
        var gender = jsonvalue["Gender"];
        var dateofbirth = jsonvalue["Dateofbirth"];
        var age = jsonvalue["Age"];
        var address = jsonvalue["Address"];
        var city = jsonvalue["City"];
        var pincode = jsonvalue["Pincode"];

        if (!firstname) {
            console.log("firse");
            registerSechma.Message = "First Name is require";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!lastname) {
            registerSechma.Message = "Last Name is require";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!email) {
            registerSechma.Message = "Email is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!Emailvalidation(email)) {
            registerSechma.Message = "Enter Valid Email";
            registerSechma.Status = false;
            return registerSechma;
        }

        else if (!password) {
            registerSechma.Message = "Password is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!confirmpassword) {
            registerSechma.Message = "ConfirmpSassword is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (password !== confirmpassword) {
            registerSechma.Message = "Password is mismatch";
            registerSechma.Status = false;
            return registerSechma;
        }

        else if (!phonenumber) {
            registerSechma.Message = "Phonenumber is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (String(phonenumber).length <= 9) {
            registerSechma.Message = "Phonenumber must have 10 digts";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!gender) {
            registerSechma.Message = "Gender is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!dateofbirth) {
            registerSechma.Message = "dateofbirth is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!age) {
            registerSechma.Message = "age is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!address) {
            registerSechma.Message = "Address is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!city) {
            registerSechma.Message = "City is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!pincode) {
            registerSechma.Message = "Pincode is rquire";
            registerSechma.Status = false;
            return registerSechma;
        }

        else {
            console.log("sucesss");
            registerSechma.Message = "Sucess";
            registerSechma.Status = true;
            return registerSechma;

        }

    }
    catch (error) {
        console.log(error);
    }
}

function ValidationLogin(jsonvalue) {
    try {
        console.log("login");
        var email = jsonvalue["Email"];
        var password = jsonvalue["Password"];

        if (!email) {
            console.log("login2");
            registerSechma.Message = "Email is require";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!Emailvalidation(email)) {
            registerSechma.Message = "Enter Valid Email";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if (!password) {
            registerSechma.Message = "Password is require";
            registerSechma.Status = false;
            return registerSechma;
        }
        else {
            registerSechma.Message = "success login";
            registerSechma.Status = true;
            return registerSechma;
        }
    }
    catch {

    }
}

function ValidationForgot(jsonvalue) {
    try {
        var email = jsonvalue["Email"];
        var password = jsonvalue["Password"];
        var confirmpassword = jsonvalue["Confirmpassword"];

        if (!email) {
            registerSechma.Message = "Email is require";
            registerSechma.Status = false;
            return registerSechma;
        }
        else if(!Emailvalidation(email)){
            registerSechma.Message="Enter Your Valid Email";
            registerSechma.Status= false;
            return registerSechma;
        }
        else if(!password){
            registerSechma.Message="Enter Your password";
            registerSechma.Status= false;
            return registerSechma;
        }
        else if(!confirmpassword){
            registerSechma.Message="Confirm Password is require";
            registerSechma.Status=false;
            return registerSechma;
        }
        else if(password !== confirmpassword){
            registerSechma.Message="Password is Mismatch";
            registerSechma.Status=false;
            return registerSechma;
        }
        else{
            registerSechma.Message="Success";
            registerSechma.Status= true;
            return registerSechma;
        }

    }
    catch {

    }

}


const registerAppionmentHelper = {

    ValidateAppionmentRegister(registerUser) {
        try {
            return Validation(registerUser);
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }
    },


    ValidationLoginUser(user) {
        try {
            return ValidationLogin(user)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }
    },

    ValidationForgortPassword(forgotUser) {
        try {
            return ValidationForgot(forgotUser);

        }
        catch {

        }
    },
    ValidateAppoinmentUser(appionmentUser) {

        try {
            console.log("entre");
            return ValidationAppionment(appionmentUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    async findByEmail(Email) {
        console.log("email");
        return await db.Users.find({Email}).toArray();
    },

    create(user1) {
        console.log("moorthi");
        return db.Users.insertOne(user1);
    },
   
    update({_id, ...Password }) {
        console.log("updatesuccess",Password)
        return db.Users.findOneAndUpdate({ _id:ObjectId(_id)}, { $set:Password }, { returnDocument: "after" });
    },

}



module.exports = registerAppionmentHelper;