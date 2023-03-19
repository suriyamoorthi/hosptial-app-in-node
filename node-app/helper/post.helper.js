const Joi = require('joi');
const { ObjectId } = require("mongodb");


// const { validateYupSchema } = require("formik");
const db = require("../shared/mongo");

const schema = Joi.object({
    userId: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    // password : Joi.string().min(3).max(9).required(),

})

const helper = {
    validate(post) {
        try {
            return schema.validateAsync(post)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },

    find() {
        return db.posts.find().toArray();
    },

    findById(_id) {
        return db.posts.findOne({ _id: ObjectId(_id) });
    },

    create(post) {
        return db.posts.insertOne(post);
    },

    update({_id, ...post }) {
        return db.posts.UpdateOne({ _id:ObjectId(_id)}, { $set: post }, { returnDocument: "after" });
    },
   
    delete(_id) {
        return db.posts.deleteOne({ _id: ObjectId(_id) });
    },
};


module.exports = helper;
