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

    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id as string;
            const user = await userService.getUserById(id);

            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "User not found"
                });
                return;
            }

            res.status(200).json({
                success: true,
                message: "User fetched successfully",
                data: user,
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Failed to fetch user"
            });
        }
    }

    async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { name, email } = req.body;
            const user = await userService.createUser({ name, email });

            res.status(201).json({
                success: true,
                message: "User created successfully",
                data: user,
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Failed to create user"
            });
        }
    }

    async createManyUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = req.body;
            
            if (!Array.isArray(users)) {
                res.status(400).json({
                    success: false,
                    message: "Request body must be an array of users"
                });
                return;
            }

            const createdUsers = await userService.createManyUsers(users);

            res.status(201).json({
                success: true,
                message: `${createdUsers.length} users created successfully`,
                data: createdUsers,
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: "Failed to create users"
            });
        }
    }
}

export const userController = new UserController();