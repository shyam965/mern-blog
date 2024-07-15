import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 9000;

// DB
connectDb();

app.use(cors());

app.listen(port, () => console.log(`Server started on port ${port}`));
