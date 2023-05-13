import express from "express"
import connectDb from "./connection.js";
import authRoutes from "./routes/auth.routes.js"
import hotelRoutes from "./routes/hotels.routes.js"
import usersRoutes from "./routes/users.routes.js"
import roomRoutes from "./routes/rooms.routes.js"
import cookieParser from "cookie-parser";
const app = express()
connectDb();

app.use((req,res,next)=>{
    next()
})
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/hotels",hotelRoutes)
app.use("/api/users",usersRoutes)
app.use("/api/rooms",roomRoutes)

app.use((err,req,res,next)=>{
    const errorStatus =err.status || 500
    const errorMessage= err.message || "Something went wrong "
return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
   
})
    next()
})

app.listen(5000,()=>{
    console.log("Server is running on 5000...");
})

