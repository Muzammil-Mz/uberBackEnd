import express from "express";
import rideModel from "../../models/Ride/Ride.js";
import bcrypt from "bcryptjs"


const router=express.Router()


router.post("/register",async (req,res)=>{
    try {
        let userinput=req.body
        // let hashPass=await bcrypt.hash(userinput.password,10)
        // userinput.password=hashPass
        await rideModel.create(req.body)
        res.status(200).json("user registered successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})



router.get('/getall',async (req,res)=>{
    try {

        let data=await rideModel.find({})
        console.log(data);
        res.status(200).json("all users")

    } catch (error) {
        res.status(500).json({msg:error})
    }
})


router.get("/getone/:name",async(req,res)=>{
    try {
        let userinput=req.params.name
        let data= await rideModel.findOne({name:userinput})
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.put("/update/:id",async (req,res)=>{
    try {
        let userid=req.params.id
        let userdata=req.body
        await rideModel.updateOne({_id:userid},{$set:userdata})
        res.status(200).json("updated successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteone/:id",async (req,res)=>{
    try {
        let userinput=req.params.id
        let del=await rideModel.deleteOne({_id:userinput})
        res.status(200).json("user deleted successfully")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteall",async (req,res)=>{
    try {
        let deleteall=await rideModel.deleteMany({})
        res.status(200).json("data deleted success")
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


export default router