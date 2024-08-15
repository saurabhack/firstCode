// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
import connectDB from "./db/index.js";
import {app} from "./app.js"
dotenv.config({path:'./.env'})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at the port : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("the connection of mongodb is failed ",err)
})




// (async ()=>{
//     try {
//         mongoose.connect()
//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()