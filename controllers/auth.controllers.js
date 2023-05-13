import User from "../models/User.models.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config();


export const register = async (req,res,next)=>{
    try {
        const hashedPassword =bcrypt.hashSync(req.body.password,10);
        const newUser = new User({
         username:req.body.username,
         email:req.body.email,
         password:hashedPassword,
        })
        await newUser.save()
        res.status(200).send(newUser)
    } catch (err) {
        next(err);
    }
}

export const login = async (req,res,next)=>{
    try {
        const user =await User.findOne({email:req.body.email})
        if(!user) return next(createError(404,"Invalid password or email"))
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect) return next(createError(400,"Invalid password or email"))

       const  token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)

const {password,isAdmin,...otherDetails} = user._doc;
res.cookie("access_token",token,{
    httpOnly:true,
})
.status(200)
.json({...otherDetails,token})

    } catch (err) {
        next(err);
    }
}