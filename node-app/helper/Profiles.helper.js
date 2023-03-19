const db = require("../shared/mongo");
const { ObjectId } = require("mongodb");
const { bool, string } = require("joi");

const profileSechma = {
    Status: bool,
    Message: ""

}

function Emailvalidation(mail) {
    // console.log("ojjfd")

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
        // var password= jsonvalue["Password"];
        var gender = jsonvalue["Gender"];
        var phonenumber = jsonvalue["Phonenumber"];
        var date = jsonvalue["Date"];
        var file = jsonvalue["File"];
        var address = jsonvalue["Address"];


        if (!firstname) {
            profileSechma.Message = "Firstname is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!lastname) {
            profileSechma.Message = "Lastname is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!email) {
            profileSechma.Message = "Email is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!Emailvalidation(email)) {
            profileSechma.Message = "Enter the valid email";
            profileSechma.Status = false;
            return profileSechma;
        }
        // else if(!password){
        //     profileSechma.Message="password is require";
        //     profileSechma.Status=false;
        //     return profileSechma;
        // }
        else if (!gender) {
            profileSechma.Message = "Gender is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!phonenumber) {
            profileSechma.Message = "phonenumber is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (String(phonenumber).length <= 9) {
            profileSechma.Message = "Phonenumber must have 10 digts";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!date) {
            profileSechma.Message = "date is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!file) {
            profileSechma.Message = "File is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!address) {
            profileSechma.Message = "Address is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else {

            profileSechma.Message = "Success";
            profileSechma.Status = true;
            return profileSechma;

        }

    }
    catch (error) {
        console.log(error);

    }

}

function ReceptionValidation(jsonvalue) {
    try {
        var receptionfirstname = jsonvalue["Receptionfirstname"];
        var receptionlastname = jsonvalue["Receptionlastname"];
        var email = jsonvalue["Email"];
        var gender = jsonvalue["Gender"];
        var phonenumber = jsonvalue["Phonenumber"];
        var dateofbirth = jsonvalue["Dateofbirth"];
        var file = jsonvalue["File"];
        var address = jsonvalue["Address"];
        console.log("first");
        if (!receptionfirstname) {
            profileSechma.Message = "Receptionfirstname is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!receptionlastname) {
            profileSechma.Message = "ReceptionLastName is require";
            profileSechma.Status = false;
            return profileSechma;
        }

        else if (!email) {
            profileSechma.Message = "Email is rquire";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!gender) {
            profileSechma.Message = "Gender is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!Emailvalidation(email)) {
            profileSechma.Message = "Enter the valid Email";
            profileSechma.Status = false;
            return profileSechma;
        }

        else if (!phonenumber) {
            profileSechma.Message = "Phonenumber is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (String(phonenumber).length <= 9) {
            profileSechma.Message = "Phonenumber must have 10 digts";
            profileSechma.Status = false;
            return profileSechma;
        }

        else if (!dateofbirth) {
            profileSechma.Message = "dateofbirth is require";
            profileSechma.Status = false;
            return profileSechma;
        }
        else if (!file) {
            profileSechma.Message = "Date is require";
            profileSechma.Status = false;
            return profileSechma;
        }

        else if (!address) {
            profileSechma.Message = "Address is require";
            profileSechma.Status = false;
            return profileSechma;
        }

        else {
            
            profileSechma.Message = "Success";
            profileSechma.Status = true;
            return profileSechma;
        }


    }
    catch (error) {
        console.log(error.message);

    }

}

const ProfileUpadateValidation = {

    validationProfile(profileUser) {
        try {
            return Validation(profileUser);
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }
    },

    ReceptionProfileValidation(users) {
        try {
            return ReceptionValidation(users);
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    async findByEmail(Email) {
        console.log("email");
        return await db.Users.find({ Email }).toArray();
    },
    async findByReceptionEmail(Email) {
        console.log("email");
        return await db.Users.find({ Email }).toArray();
    },
    update({ _id, ...profileUser }) {
        console.log("updatesuccess", profileUser)
        return db.Users.findOneAndUpdate({ _id: ObjectId(_id) }, { $set: profileUser }, { returnDocument: "after" });
    },

    ReceptionUpdate({_id, ...user1}){
        console.log("RECEPTION UOADTE",user1)
        return db.Users.findOneAndUpdate({_id:ObjectId(_id)}, {$set: user1},{returnDocument:"after"});
    },



}


module.exports = ProfileUpadateValidation;