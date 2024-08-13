// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
import connectDB from "./db/index.js";
// import {app} from "./app.js"
dotenv.config({path:'./.env'})

connectDB()




// (async ()=>{
//     try {
//         mongoose.connect()
//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     }
// })()