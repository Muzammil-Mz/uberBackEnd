import express, { json } from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const router=express.Router()

import driverModel from "../../models/Driver/Driver.js"

router.post("/register",async (req,res)=>{
    try {
        let userinput=req.body
        let hashPass=await bcrypt.hash(userinput.password,10)
        userinput.password=hashPass
        let userdata=driverModel.create(userinput)
        res.status(200).json("driver registered successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.put("/update/:id",async (req,res)=>{
    try {
        let userid=req.params.id
        let userdata=req.body
        await driverModel.updateOne({_id:userid},{$set:userdata})
        res.status(200).json("updated successfully")
    } catch (error) {
        console.log(error);
        res.status(200).json({msg:error})
    }
})


router.get("/getall",async (req,res)=>{
    try {
        let getall=await driverModel.find ({})
        res.status(200).json("all users")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get("/getone/:name",async (req,res)=>{
    try {
        let username=req.params.name
        let getone=await driverModel.findOne({name:username})
        res.status(200).json(getone)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteone/:id",async (req,res)=>{
    try {
        let userid=req.params.id
        let deleteuser=await driverModel.deleteOne({_id:userid})
        res.status(200).json("deleted user")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


export default router