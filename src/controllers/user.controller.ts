import { Request, Response } from "express";
import { userService } from "../services";


export class UserController{
    async getAllUsers(_req:Request, res: Response):Promise<void>{
        try{
            const users = await userService.getAllUsers();

            res.status(200).json({
                success: true,
                message: "Users fetch sucessfully",
                data: users, 
            })
        }catch(err){
            res.status(500).json({
                success: false,
                message:"Failed to fetch users"
            })
        }
    }
}

export const userController = new UserController();