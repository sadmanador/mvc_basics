import { User } from "../models/user.model";


export class UserService{
    async getAllUsers(){
        return User.find()
    }
    async getUsersbyId(){
        return User.find()
    }
}

export const userService = new UserService();