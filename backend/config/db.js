import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ayushtomar:8077898954@cluster0.zj3zxcx.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}
