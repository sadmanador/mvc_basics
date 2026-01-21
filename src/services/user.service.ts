import { User } from "../models/user.model";


export class UserService{
    async getAllUsers(){
        return User.find()
    }
    async getUserById(id: string) {
        return User.findById(id);
    }

    async createUser(userData: { name: string; email: string }) {
        return User.create(userData);
    }

    async createManyUsers(usersData: { name: string; email: string }[]) {
        return User.insertMany(usersData);
    }
}

export const userService = new UserService();