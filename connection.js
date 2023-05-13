import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery',true)
const connectDb = async ()=>{
    try {
        mongoose.connect(process.env.URI,{
            useNewURLParser: true,
            useUnifiedTopology: true,
        }).then(()=>console.log(`db connected`))
            
        
    }catch (error) {
        console.log(error)
        process.exit()
    }
}

export default connectDb;