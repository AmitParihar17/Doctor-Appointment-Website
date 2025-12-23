import express from "express";
import cors from "cors"
import adminRouter from "./routes/admin.route.js";
const app = express();

// middlewares
app.use(express.json())
app.use(cors({
    origin : process.env.CROSS_ORIGIN,
    credentials : true,
}))

// api endpoint

app.use("/api/admin",adminRouter)
// localhost:4000/api/admin

app.get("/",(req,res) => {
    res.send("Api is working");
    
})

export default app