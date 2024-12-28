import express, { Router } from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"

import customerModel from "../../models/Customer/Customer.js"
const router=express.Router()


router.get("/getall",async (req,res)=>{
    try {
        let getusers= await customerModel.find({})
        console.log(getusers);
        res.status(200).json("all users")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get("/getone/:id",async (req,res)=>{
    try {
        let getid=req.params.id
        let getone=await customerModel.findOne({_id:getid})
        console.log(getone);
        res.status(200).json("find one user")
    } catch (error) {
        console.log(error);
    res.status(500).json({msg:error})
    }
})

router.post("/register",async (req,res)=>{
    try {
        let userinput=req.body
        let hashPass=await bcrypt.hash(userinput.password,10)
        userinput.password=hashPass
        await customerModel.create(userinput)
        res.status(200).json("user registered")

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteone/:id",async (req,res)=>{
    try {
        let userid=req.params.id
        let deleteuser=await customerModel.deleteOne({_id:userid})
        res.status(200).json("user deleted ")

    } catch (error) {
        console.log(error);
        res.status(500).json ({msg:error})
    }
})

router.put("/update/:id",async(req,res)=>{
    try {
        let userid=req.params.id
        let userdata=req.body
        await customerModel.updateOne({_id:userid},{$set:userdata})
        res.status(200).json("updated successfully")
    } catch (error) {
        
    }
})

router.delete("/deleteall",async (req,res)=>{
    try {
        
    let deletedb=await customerModel.deleteMany()
    res.status(200).json("deleted successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router