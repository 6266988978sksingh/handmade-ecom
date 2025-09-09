import express from "express"

import authMiddleware from "../middleware/Auth.js"

import { placeOrder, verifyOrder,userOrders, listOrder, updateStatus } from "../controlers/OrderControler.js"
// import { verify } from "jsonwebtoken";

const orderRouter= express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get('/list',listOrder);
orderRouter.post("/status",updateStatus);

export default orderRouter;