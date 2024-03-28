const express = require("express");
const router = express.Router();
const {Category, validateCategory} = require("../models/category");


router.delete("/api/categories/:id", async (req,res)=>{
    const id = req.params.id;
    try{
        const category = await Category.findByIdAndDelete(id);
        return res.status(200).send(category)
    }
    catch(err){
        console.log(err)
    }
})

router.put("/api/categories/:id", async (req,res) =>{
    const id = req.params.id;
    try{
        const category = await Category.findById(id);
        if(!category){
            return res.status(400).send("There is no such category.")
        }
        const {error} = validateCategory(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        category.name = req.body.name;
        category.save();
        res.status(200).send(category);
    }
    catch(err){
        console.log(err)
    }
});

router.get("/api/categories/:id", async (req,res)=>{
    const id = req.params.id;
    try{
        const category = await Category.findById(id);
        if(!category){
            return res.status(400).send("There is no such category.")
        }
        return res.status(200).send(category)
    }
    catch(err){
        console.log(err)
    }
});

router.post("/api/categories", async(req,res)=>{
    try{
        const {error} = validateCategory(req.body);
        if(error){
            return res.status(400).send(error.details[0].message);
        }
        const category = await new Category({
            name : req.body.name
        })
        category.save();
        return res.status(200).send(category);
    }
    catch(err){
        console.log(err)
    }
});

router.get("/api/categories", async(req, res) => {
    try{
        const categories = await Category.find();
        res.status(200).send(categories);
    }
    catch(err){
        console.log(err)
    }
});

module.exports = router;
