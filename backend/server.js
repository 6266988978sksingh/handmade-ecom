import  express  from "express"
import cors from "cors"
import { connectDB } from './config/db.js'
import productRouter from "./routes/ProductRoute.js"
import userRouter from "./routes/UserRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/CartRoute.js"
import orderRouter from "./routes/OrderRoute.js"


//app config
const app= express()
const port= process.env.PORT ||4000


//middleware
 app.use(express.json())
 app.use(cors())

 //db connection
 connectDB();
 // api end point

 app.use("/api/product",productRouter)
 app.use("/images",express.static('uploads'))
 app.use("/api/user",userRouter)
 app.use("/api/cart",cartRouter)
 app.use("/api/order",orderRouter);



app.use(express.static(path.join(__dirname, '../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});




 
 

 app.get("/",(req,res)=>{
    res.send("API Working")
 })

 app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
 })

 //mongodb+srv://sksingh:<db_password>@cluster0.egzza.mongodb.net/?



