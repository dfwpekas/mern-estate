import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected Suceesfully to MongoDB");
}).catch((err) => {
    console.log("Error: " + err);   
});


const app = express();


app.listen(3000, () => {
    console.log("Server is currently running on port 3000");
});

app.use("/api/user", userRouter);  