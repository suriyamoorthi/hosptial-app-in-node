const bcrypt = require("bcrypt");
const { string, any, ref } = require("joi");
const helper = require("../helper/LoginRegister.helper");

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

const authService = {


    async registerappionment(req, res) {

        try {

            //Data Validation
            const registerUser = await helper.ValidateAppionmentRegister(req.body);

            console.log("1232244");

            if (registerUser.Status) {

                delete req.body["Confirmpassword"];
                req.body["Usertype"] = 1;
                console.log("@@@@@@");
                const userRsgister = await helper.findByEmail(req.body["Email"]);

                if (userRsgister.length == 0) {
                    console.log("lenth");

                    //Password Hash Validation

                    const salt = await bcrypt.genSalt();
                    const result = await bcrypt.hash(req.body["Password"], salt);
                    req.body["Password"] = result
                    console.log("Password", result);
                    const addname = `${req.body["Firstname"]}${req.body["Lastname"]}`
                    req.body["Fullname"] = addname;
                    console.log("ADD DOCTOR NAME", addname);


                    //Insert User
                    const registeruser = await helper.create(req.body)

                    if (registeruser) {

                        return res.send(apibodyconstruct(statuscode_sucess, "Registerappionment create sucess fully", ""));
                    }
                    else {
                        return res.send(apibodyconstruct(statuscode_Notfound, "Registerappionment not created sucess fully", ""));
                    }
                }
                else {

                    return res.send(apibodyconstruct(statuscode_Notfound, "Registerappionment alredy created for this emailid go to login", ""));

                }


            }
            else {
                return res.send(apibodyconstruct(statuscode_Notfound, registerUser.Message, ""));
            }


        }
        catch (err) {
            res.send({ error: err.message })
        }

    },
    async login(req, res) {
        try {

            const user = await helper.ValidationLoginUser(req.body);


            if (user.Status) {

                const userLogin = await helper.findByEmail(req.body["Email"])
                console.log("Erroe check", userLogin );
                if (userLogin.length > 0) {
                    console.log("length");
                    const result = userLogin[0].Password;
                    console.log("PASSWORD", result);
                    const isSame = await bcrypt.compare(req.body["Password"], userLogin[0].Password);
                    if (isSame) {

                        res.send(apibodyconstruct(statuscode_sucess, "Login successfully", apiboday.Data = userLogin));

                    }
                    else {

                        res.send(apibodyconstruct(statuscode_Notfound, "Password Mismatch", ""))

                    }
                } else {
                    res.send(apibodyconstruct(statuscode_Notfound, "Email is Invalid Register first", ""));
                }


                //    const passwordValidatiom = await bcrypt.compare(req.body["Password"], userLogin.Password);
                //    console.log("PASSWORD",passwordValidatiom);
            }
            else {

                return res.send(apibodyconstruct(statuscode_Notfound, user.Message, ""));
            }
        }

        catch (err) {
            res.send({ error: err.message })
        }

    },

    async forgot(req, res) {
        try {


            const forgotUser = await helper.ValidationForgortPassword(req.body);

            if (forgotUser.Status) {
                const forgotEmail = await helper.findByEmail(req.body["Email"]);
                console.log("EMAIL VALUE", forgotEmail);
                if (forgotEmail.length == 1) {

                    const salt = await bcrypt.genSalt();
                    const result = await bcrypt.hash(req.body["Password"], salt);
                    req.body["Password"] = result;
                    const value = await helper.update({ _id: forgotEmail[0]._id, Password: req.body["Password"] });

                    if (value) {


                        res.send(apibodyconstruct(statuscode_Notfound, "Forgot success", ""));
                    }
                    else {
                        res.send(apibodyconstruct(statuscode_Notfound, "Forgot Not success", ""));
                    }


                }
                else {
                    res.send(apibodyconstruct(statuscode_Notfound, "Email is not valid", ""));
                }
            }
            else {
                res.send(apibodyconstruct(statuscode_Notfound, forgotUser.Message, ""));
            }
        }
        catch (err) {
            res.send({ error: err.message });
        }

    }


}

module.exports = authService;