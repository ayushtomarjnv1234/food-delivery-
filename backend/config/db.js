import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayush:ayush123%40@cluster0.cnkcimb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}