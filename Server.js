import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import transactionRoutes from "./Routes/transactionRoutes.js";
import labelsRoutes from "./Routes/transactionRoutes.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app configs goes here
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware goes here
// to accept data from backend
app.use(express.json());
// to connect frontend and backend on same cors policy

app.use(cors());

// DB Config
connectDb();

// Api  EndPoints
app.use("/api/v1", categoryRoutes);
app.use("/api/v1", transactionRoutes);
app.use("/api/v1", labelsRoutes);

// --------------------------deployment------------------------------

app.use(express.static(path.join(__dirname, "./Frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Frontend/build/index.html"));
});
// --------------------------deployment------------------------------
// Listener
app.listen(PORT, () => console.log(`listening to local host: ${PORT}`));
