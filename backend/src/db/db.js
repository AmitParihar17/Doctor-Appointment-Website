import mongoose from "mongoose"
import { DB_NAME } from "../constant.js";

const connectDB = async() => {
    try {
   const connectionInstance = await mongoose.connect(
     `${process.env.MONGODB_URI}/${DB_NAME}`
   );
   console.log(`MONGO_DB Connected || DB Host ${connectionInstance.connection.host}`);
   
    } catch (error) {
        console.log(error.message,"Failed to connectDB");
        process.exit((1))
    }
}

export {connectDB}