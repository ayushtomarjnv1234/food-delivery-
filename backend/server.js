import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

import orderModel from "./models/orderModel.js"

//app config
const app = express()
const port = process.env.PORT || 4000; 

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB().then(async () => {
    // Migration: Update old orders that don't have paymentMethod set properly
    try {
        const result = await orderModel.updateMany(
            { paymentMethod: { $in: [null, "", "Pending"] } },
            { $set: { paymentMethod: "Stripe" } }
        );
        if (result.modifiedCount > 0) {
            console.log(`Migrated ${result.modifiedCount} old orders to have Stripe as payment method`);
        }
    } catch (error) {
        console.log("Migration error:", error);
    }
});

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API Working - v9 (COD Fixed with Migration)")
})

// Debug endpoint to see raw orders
app.get("/debug/latest-order", async (req,res)=>{
    try {
        const latestOrder = await orderModel.findOne().sort({_id: -1});
        res.json(latestOrder);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.get("/debug/orders", async (req, res) => {
    try {
        const orders = await orderModel.find({}).sort({date: -1}).limit(5);
        res.json(orders);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.listen(port , ()=>{
    console.log(`Server started on http://localhost:${port}`)
})
