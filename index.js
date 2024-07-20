import express from "express";
import referRoute from "./routes/referral.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const server = express();

server.use(express.json());

server.use("/api", referRoute);

server.listen(3000, () => {
  console.log("Server connected");
});
