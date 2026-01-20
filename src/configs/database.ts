import mongoose from "mongoose";
import {config} from "./index"


export const connectDatabase = async():Promise<void> =>{
    try{
        await mongoose.connect(config.mongodbUri);
        console.log("MongoDB Connected");

        mongoose.connection.on("error",(error)=>{
            console.error("Mongodb connetion error:",error);
        })
        mongoose.connection.on("disconnected",()=>{
            console.warn("Mongodb disconneted");
        })
    
    }catch(err){
        console.error("MongoDB connection failed:", err);
        process.exit(1)
    }
}