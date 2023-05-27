import express from "express";
import {deleteUser, getAllUser, getUser, updateUser } from "../controllers/users.controllers.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//update
router.put("/:id",verifyUser,updateUser)
//delete
router.delete("/:id",verifyUser,deleteUser)
//get
router.get("/:id",verifyUser,getUser)
//get all
router.get("/",verifyAdmin,getAllUser)
export default router;