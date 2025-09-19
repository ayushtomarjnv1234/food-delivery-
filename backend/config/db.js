import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();  // Load .env file

export const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB Connection Error:", err));
}
