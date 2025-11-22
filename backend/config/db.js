import mongoose from "mongoose";

export const connectDB = async () => {
    // Hardcoded to force new database - ignore environment variables
    const mongoUri = 'mongodb+srv://ayush:ayush123%40@cluster0.cnkcimb.mongodb.net/food-delivery-fresh-v2';
    await mongoose.connect(mongoUri).then(()=>console.log("DB Connected to:", mongoUri.split('@')[1]));
}