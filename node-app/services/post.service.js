const helper = require("../helper/post.helper");
const userHelper = require("../helper/user.helper");


const service = {
    async getAllpost(_, res) {
        try {
            const data = await helper.find();
            res.send(data)
        }
        catch (err) {
            console.log("Error- ", err.message);
            return res.status(500).send({ error: "cannot fetch all posts" });
        }
    },

    async getPostById(req, res) {
        try {
            const data = await helper.findById(req.params.id);
            res.send(data);
        } catch (err) {
            console.log("Error -", err.message);
            return res.status(500)
                .send({ error: `cannot fetch post with id - ${req.params.id}` });
        }

    },

    async createPost(req, res) {
       
        try {

            console.log("create post");

            //Insert Data

            const post = await helper.validate(req.body);
            console.log(post);

            //user validation
            const user = await userHelper.findById(post.userId);
            console.log(user);
            if (!user) return res.status(400).send({ error: "user invaild" });


            //Insert Data
            const { inserteddata } = await helper.create(post);
            res.send({ inserteddata });


        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }

    },

    async updatePost(req, res) {
        
        try {
            //Data Validation
            const newPost = await helper.validate(req.body);
            console.log("dsdsdfsfs");


            //post vlaidation 
            const oldPost = await helper.findById(req.params.id);
            if (!oldPost) return res.status(400).send({ error: "post invaild" });
            console.log("dsdsfsf");


            //user validation 
           const user = await userHelper.findById(newPost.userId);
            if (!user) return res.status(400).send({ error: "user invalid" });
            

            //update date
            const { value } = await helper.update({ _id: oldPost._id, ...newPost });

            res.send(value);
        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }

    },

    async deletePost() {
        try {
            //Post Validation

            const post = await helper.findById(req.params.id);
            if (!post) return res.status(400).send({ error: "post invaild" });

            //Delete Data

            await helper.deleteById(post._id);

            res.end();
        }
        catch (err) {
            return res.status(500).send({ error: err.message });
        }
    },

};


module.exports = service;