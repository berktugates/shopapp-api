const express = require("express");
const router = express.Router();
const {Product, validateProduct} = require("../models/product");


router.delete("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findByIdAndDelete(id);
    res.status(200).send(product);
  }
  catch(err){
    console.log(err);
  }
});

router.put("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findById(id);
    if(!product){
      return res.status(400).send("There is no such product")
    }
    const {error} = validateProduct(req.body);
    if(error){
      res.status(400).send(error.details[0].message);
    }
    product.name = req.body.name;
    product.description = req.body.description;
    product.image_url = req.body.image_url;
    product.is_active = req.body.is_active;

    await product.save();
    
    return res.status(200).send(product)
  }
  catch(err){
    console.log(err)
  }
});

router.get("/api/products/:id", async (req, res) => {
  const id = req.params.id;
  try{
    const product = await Product.findById(id);
    if(!product){
      return res.status(400).send("There is no such product")
    }
    return res.status(200).send(product)
  }
  catch(error){
    console.log(error)
  }
});


router.post("/api/products", async (req, res) => {
  try{
    const {error} = validateProduct(req.body);
    if(error){
      return res.status(400).send(error.details[0].message);
    }
    const product =  await new Product({
      name : req.body.name,
      description : req.body.description,
      image_url : req.body.image_url,
      is_active : req.body.is_active
    });

    await product.save();
    return res.status(200).send(product)

  }
  catch(err){
    console.log(err)
  }
});

router.get("/api/products",  async (req, res) => {
  try{
    const products = await Product.find();
    if(!products){
      res.status(400).send("There are no products")
    }
    return res.status(200).send(products);
  }
  catch(err){
    console.log(err)
  }
});


module.exports = router;
