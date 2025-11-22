import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://ayush:ayush123%40@cluster0.cnkcimb.mongodb.net/food-del';
    await mongoose.connect(mongoUri).then(()=>console.log("DB Connected to:", mongoUri.split('@')[1].split('/')[0]));
}