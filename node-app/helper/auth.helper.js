const { bool, string } = require("joi");
const Joi = require("joi");
const { ObjectId } = require("mongodb");
const { reuse } = require("../sample/reusecode")
const db = require("../shared/mongo");
const date_ob = require("../sample/reusecode");

const registerSchema = Joi.object({

    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(9).required(),
    cPassword: Joi.ref("password"),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(3).max(9).required()
});


const validtionmessage = {
    Status: bool,
    Message: ""
};
const FindAppointment = {

    Email: string,
    Date: string
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
// function Validation(jsonvalue) {
//     try {
//         console.log(jsonvalue);
//         // var obj = validtionmessage;
//         var firstName = jsonvalue["Firstname"];
//         var lastname = jsonvalue["Lastname"];
//         var email = jsonvalue["Email"];
//         var password = jsonvalue["Password"];
//         var gender = jsonvalue["Gender"];
//         var phonenumber = jsonvalue["Phonenumber"];
//         var date = jsonvalue["Date"];
//         var address = jsonvalue["Address"];
//         var city = jsonvalue["City"];
//         var pincode = jsonvalue["Pincode"];

//         console.log("Sucess");
//         if (!firstName) {
//             validtionmessage.Message = "Need First Firstname";
//             validtionmessage.Status = false;
//             return validtionmessage;

//         }
//         else if (!lastname) {
//             validtionmessage.Message = "Need Lasttname";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!email) {
//             validtionmessage.Message = "Email is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!Emailvalidation(email)) {
//             validtionmessage.Message = "Enter Valid Email";
//             validtionmessage.Status = false;
//             return validtionmessage;

//         }
//         else if (!password) {
//             validtionmessage.Message = "Password is require";
//             validtionmessage.Status = false;
//             return validtionmessage;

//         }
//         else if (!gender) {
//             validtionmessage.Message = "Gender is require";
//             validtionmessage.Status = false;
//             return validtionmessage;

//         }
//         else if (!phonenumber) {
//             validtionmessage.Message = "Phonumber is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (String(phonenumber).length <= 10) {
//             validtionmessage.Message = "Phonumber  10 required";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!date) {
//             validtionmessage.Message = "Date is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!address) {
//             validtionmessage.Message = "Address is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!city) {
//             validtionmessage.Message = "City is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else if (!pincode) {
//             validtionmessage.Message = "Pincode is require";
//             validtionmessage.Status = false;
//             return validtionmessage;
//         }
//         else {
//             console.log("Sucess1");
//             validtionmessage.Message = "Success";
//             validtionmessage.Status = true;
//             return validtionmessage;

//         }
//     }
//     catch (err) {
//         console.log(err);

//     }
// }

const helper = {
    validiteRegister(user) {
        try {
            return registerSchema.validateAsync(user);
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    validiteLogin(user) {
        try {
            return loginSchema.validateAsync(user);
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },
    ValidateAppoinment(appionmentUser) {

        try {
            console.log("entre");
            return Validation(appionmentUser)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    // findUser(email, password) {
    //     return db.users.findOne({ email, password });
    // },
    // async CheckAppointmentAllReadyExist(email, date) {
    //     try {
    //         //{Email,Date}
    //         FindAppointment.Email = email;
    //         FindAppointment.Date = date
    //         const checkdat = await db.users.find(FindAppointment).toArray();
    //         console.log(checkdat.length);
    //         return checkdat;

    //     } catch (execption) {
    //         console.log(execption);
    //     }
    // },
    findById(_id) {
        return db.users.findOne({ _id: ObjectId(_id) });
    },

    create(appionmentUser) {
        return db.users.insertOne(appionmentUser);
    },
};


module.exports = helper;