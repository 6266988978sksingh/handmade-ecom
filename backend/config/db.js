import mongoose from "mongoose";

   export const connectDB= async ()=>{
     await mongoose.connect('mongodb+srv://6266988978sksingh:89593134@cluster0.v4hsx.mongodb.net/handmade-haat').then(()=>console.log("DB Connected"));
}


