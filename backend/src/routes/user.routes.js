import { Router } from "express";
import { registerUser, } from "../controllers/user.controller.js";


const router = Router();


router.route("/register").post(registerUser)











// { name: 'permit_photo', maxCount: 1 }],








export default router