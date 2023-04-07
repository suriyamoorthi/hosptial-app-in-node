const bcrypt = require("bcrypt");
const helper = require("../helper/Profiles.helper");
const { string, any } = require("joi");

const statuscode_sucess = 200;
const statuscode_Notfound = 400;

const apiboday = {
    Statuscode: Int32Array,
    Message: string,
    Data: any,
}
function apibodyconstruct(statuscode, message, bodymessage) {
    apiboday.Message = message;
    apiboday.Statuscode = statuscode,
        apiboday.Data = bodymessage

    return apiboday;
}

const profileService = {

    async patientProfileUpdate(req, res) {
        try {
            console.log("fdsdgdsgsdg")
            const profileUser1 = await helper.validationProfile(req.body);
            console.log("users", profileUser1);


            if (profileUser1.Status) {
                console.log("fdsdgdsgsdg")
                // const value = await helper.update({ _id: profileUser1[0]._id, ...profileUser1  });

                //      res.send(value);
                const profileUser = await helper.findByEmail(req.body["Email"]);
                console.log("wwwww", profileUser[0].Date);
                console.log("EMAIL VALUE", profileUser);
                if (profileUser.length == 1) {


                    // const salt = await bcrypt.genSalt();
                    // const result = await bcrypt.hash(req.body["Password"], salt);
                    // req.body["Password"] = result
                    const value = await helper.update({ _id: profileUser[0]._id, ...req.body });

                    if (value) {


                        res.send(apibodyconstruct(statuscode_sucess, "Upadte successfully create", ""));
                    }
                    else {
                        res.send(apibodyconstruct(statuscode_Notfound, "Upadte Not success", ""));
                    }


                }
                else {
                    res.send(apibodyconstruct(statuscode_Notfound, "Email is not valid", ""));
                }
            }
            else {
                res.send(apibodyconstruct(statuscode_Notfound, profileUser1.Message, ""));
            }
        }

        catch (err) {
            res.send({ error: err.message });
        }

    },
    async ReceptionProfileUpdate(req, res) {

        try {

            const users = await helper.ReceptionProfileValidation(req.body);
            console.log("USERD123", users);

            if (users.Status) {
                console.log("SUCESSS UPDATE");
                const user1 = await helper.findByReceptionEmail(req.body["Email"]);
                console.log("EMAIL VALUE", user1);

                if (user1.length == 1) {
                    console.log("EMAIL VALUE1233");

                    const finalValue = await helper.ReceptionUpdate({ _id: user1[0]._id, ...req.body });
                    console.log("FINAL VALUE", finalValue);
                    if (finalValue) {
                        res.send(apibodyconstruct(statuscode_sucess, "Update is sucssfully create", ""));
                    }
                    else {
                        res.send(apibodyconstruct(statuscode_Notfound, "Update is not create", ""));
                    }

                }
                else {
                    return res.send(apibodyconstruct(statuscode_Notfound, "Email is not valid"));
                }

            }
            else {
                res.send(apibodyconstruct(statuscode_Notfound, users.Message, ""));
            }
        }



        catch {

        }

    },

    async DoctorProfileUpdate(req, res) {
        try {
            const DoctorUser = await helper.DoctorPofileValidation(req.body);
            console.log("STEP1", DoctorUser);
            if (DoctorUser.Status) {
                const findEmail = await helper.findByReceptionEmail(req.body["Email"]);
                console.log("STEP2", findEmail);
                if (findEmail.length == 1) {
                    console.log("STEP3");
                    const DoctorValue = await helper.DoctorUpdate({ _id: findEmail[0]._id, ...req.body });
                    console.log("STEP4", DoctorValue);
                    if (DoctorValue) {
                        res.send(apibodyconstruct(statuscode_sucess, "Update is sucssfully create", ""))
                    }
                    else {
                        res.send(apibodyconstruct(statuscode_Notfound, "Update is not create", ""))

                    }

                }
                else {
                    return res.send(apibodyconstruct(statuscode_Notfound, "Email is not valid"));
                }


            }
            else {
                res.send(apibodyconstruct(statuscode_Notfound, DoctorUser.Message, " "));
            }
        }
        catch {

        }

    },


    async AdminProfile(req, res) {
        console.log("STEP 000");
        try {
            const AdminUser = await helper.AdminProfileValidation(req.body);

            console.log("STEP 1", AdminUser);

            if (AdminUser.Status) {

                const adminEmailFind = await helper.findByEmail(req.body["Email"]);
                console.log("STEP2", adminEmailFind);

                if (adminEmailFind.length == 1) {
                    console.log("STEP2");

                    const AdminValue = await helper.AdminUpdate({ _id: adminEmailFind[0]._id, ...req.body });
                    if (AdminValue) {
                        res.send(apibodyconstruct(statuscode_sucess, "Update is sucssfully create ", ""))
                    }
                    else {
                        res.send(apibodyconstruct(statuscode_sucess, "Update is not create ", ""))
                    }
                }
                else {
                    res.send(apibodyconstruct(statuscode_sucess, "Email is not valid ", ""))
                }


            }
            else {
                res.send(apibodyconstruct(statuscode_sucess, AdminUser.Message, ""))
            }


        }
        catch {

        }

    }
}

module.exports = profileService;