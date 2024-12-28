import express from "express"
import config from "config"

import("./utils/dbConnect.js")
import customerRouter from "./controllers/Customer/index.js"
import driverRouter from "./controllers/Driver/index.js"



const app=express()
const port=config.get("PORT")
app.use(express.json())


app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello world"})
    } catch (error) {
        console.log(error);
    }
})


app.use("/api/customer", customerRouter)
app.use("/api/driver",driverRouter)
app.listen(port,()=>{
   console.log("Server is up and listening");
})