import User from "../models/User.models.js"
export const updateUser =async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser);
    } catch (err) {
       next(err)
    }
    }

export const deleteUser =async(req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Deleted successfully");
    } catch (err) {
      next(err);
    }
    }
export const getUser =async(req,res,next)=>{
    try {
        const getUser = await User.findById(req.params.id)
        res.status(200).json(getUser);
    } catch (err) {
     next(err)
    }
    }
 export const getAllUser = async(req,res,next)=>{
        try {
            const getAllUser = await User.find()
            res.status(200).json(getAllUser);
        } catch (err) {
            next(err)
        }
        }