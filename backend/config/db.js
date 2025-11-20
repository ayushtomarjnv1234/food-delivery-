import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Piyush:Piyush211@cluster0.ymkmg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}