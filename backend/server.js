import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDB } from './config/db.js';
import productRouter from "./routes/ProductRoute.js";
import userRouter from "./routes/UserRoute.js";
import cartRouter from "./routes/CartRoute.js";
import orderRouter from "./routes/OrderRoute.js";

import path from 'path';
import { fileURLToPath } from 'url';

// ESM me __dirname define karna
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// API endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// React frontend serve karna
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Optional: API root test (catch-all se pehle)
app.get("/api", (req, res) => {
    res.send("API Working");
});

// Catch-all for React Router (Stripe success redirect etc.)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Server start
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
