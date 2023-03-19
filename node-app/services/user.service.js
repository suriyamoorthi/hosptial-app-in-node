const helper = require("../helper/user.helper")

const service = {
    async getAllUser(_, res) {
        try {
            const data = await helper.find();
            res.send(data);
        }
        catch (err) {
            console.log("Error-", err.message);
            res.status(500).send({ error: "cannot fetch all users -name" });
        }
    },

    async getUserById(req, res) {
        try {
            const data = await helper.findById(req.params.id);
            res.send(data);
        } catch (err) {
            console.log("Error-", err.message);
            res.status(500)
                .send({ error: `cannot fetch user with id -${res.params.id}` });
        }
    },

    async createUser(req, res) {

        try {

            console.log("create user");

            //Insert Data

            const user = await helper.validate(req.body);
            console.log("sfsfsf");


            //Insert Data
            const inserteddata = await helper.create(user);
            res.send(inserteddata);



        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }

    },


    async updateUser(req, res) {

        try {
            //Data Validation
            const newUser = await helper.validate(req.body);
            console.log("dsdsdfsfs");

            //user validation 
            const user = await helper.findById(req.params.id);
            if (!user) return res.status(400).send({ error: "user invalid" });

            //update date
            const { value } = await helper.update({ _id: user._id, ...newUser });

            res.send(value);
        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }

    },

    async deleteUser(req, res) {
        console.log("dsdsff");

        try {


            //user Validation

            const user = await helper.findById(req.params.id);
            if (!user) return res.status(400).send({ error: "user invaild" });
            console.log("dsdsff");

            //Delete Data
            await helper.delete(user._id);
            console.log("dsdsff");
            res.end();
        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }

    },


}


module.exports = service;