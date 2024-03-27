const mongoose = require("mongoose");
const Joi = require("joi");

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    image_url: String,
    is_active: Boolean 
});


const Product = mongoose.model("Product",productSchema);

function validateProduct(product){
    const schema = Joi.object({
        name: Joi.string().min(1).max(200).required(),
        description: Joi.string().min(1).required(),
        image_url: Joi.string().required(),
        is_active: Joi.boolean().required()
    })
    return schema.validate(product);
}

module.exports = {Product, validateProduct};