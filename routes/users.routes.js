import express from "express";
import {deleteUser, getAllUser, getUser, updateUser } from "../controllers/users.controllers.js";
const router = express.Router();

//update
router.put("/:id",updateUser)
//delete
router.delete("/:id",deleteUser)
//get
router.get("/:id",getUser)
//get all
router.get("/",getAllUser)
export default router;