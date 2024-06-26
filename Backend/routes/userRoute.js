import express from "express";
import { create,deleteUser,getdata,update,getUserById } from "../controller/userController.js";
const route=express.Router();
route.post("/create",create);
route.get("/getdata",getdata);
route.get('/getUserById/:id', getUserById);
route.put("/update/:id",update);
route.delete("/deleteUser/:id",deleteUser)
export default route;