import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    items:{type:Array,required:true},
    amount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default:"Food Processing"},
    date:{type:Date,default:Date.now},
    payment:{type:Boolean,default:false},
    paymentMethod:{type:String,default:"Pending"}
})

// Force model recompilation if schema changed (Debug fix)
if (mongoose.models.order) {
    delete mongoose.models.order;
}

const orderModel = mongoose.model("order",orderSchema);
export default orderModel;