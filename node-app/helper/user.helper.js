const Joi =require("joi");
const { ObjectId } = require("mongodb");

const db = require("../shared/mongo");

const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    // password : Joi.string().min(3).max(9).required(),

})

const helper ={
    validate(user) {
        try {
            return schema.validateAsync(user)
        }
        catch ({ details: [{ message }] }) {

            throw new Error(message);
        }

    },
    find() {
        return db.users.find().toArray();
    },
    findById(_id) {
        return db.users.findOne({ _id: ObjectId(_id)});
    },

    create(user) {
        return db.users.insertOne(user);
    },
    update({_id, ...user }) {
        return db.users.findOneAndUpdate({ _id:ObjectId(_id)}, { $set: user }, { returnDocument: "after" });
    },
    delete(_id) {
        return db.users.deleteOne({ _id: ObjectId(_id)});
    },
};
 

module.exports = helper;