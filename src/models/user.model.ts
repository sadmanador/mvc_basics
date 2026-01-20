import mongoose, { Document, Schema } from "mongoose";


export interface IUser  extends Document{
    name: string;
    email: string;
}

const userSchema = new Schema<IUser>({
    name:{
        type: String,
        // required: [true, "Name is required"],
        // unique: true,
        // uppercase: true,
        // trim: true,
        // minLength: [3,"Name must be at least 3 charaters"],
        // maxLength: [20,"Name cannot exceed 20 charaters"],
        // enum: ["male", "female"]
    },
    email:{
        type: String,
        unique: true
    }
})

export const User = mongoose.model<IUser>("User", userSchema)