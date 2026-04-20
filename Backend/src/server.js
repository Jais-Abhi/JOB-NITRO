import express from "express";
import { connectDB } from "./config/dbConnect";
const app = express();

connectDB();
const PORT = process.env.PORT || 5000;

app,listen(PORT,()=>{
    console.log("Server is listening on port : ", PORT);
})