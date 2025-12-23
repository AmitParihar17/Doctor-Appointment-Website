import "dotenv/config"
import app from "./app.js"
import { connectDB } from "./db/db.js"
import connectCloudinary from "./utils/cloudinary.js"

const Port = process.env.PORT || 8000

connectCloudinary();
connectDB()
.then( () => {
    app.listen(Port,() => {
        console.log(`Application started on ${Port}`);
        
    })
})
.catch((error) => {
    console.log(error.message,"DB connection failed");
    return
})