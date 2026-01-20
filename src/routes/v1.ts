import { Router } from "express";
import { userController } from "../controllers";

const router = Router();

router.get("/users", (req, res)=>
    userController.getAllUsers(req, res)
)

export default router