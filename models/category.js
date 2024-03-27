const mongoose = require("mongoose");
const Joi = require("joi");

const categorySchema = mongoose.Schema({
    name : String
})

function validateCategory (category){
    const schema = Joi.object({
        name : Joi.string().required()
    })
    return schema.validate(category)
}

const Category = mongoose.model("Category", categorySchema);

module.exports = {Category, validateCategory};

