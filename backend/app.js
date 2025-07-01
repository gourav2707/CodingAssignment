import express from "express";
import mongoose from "mongoose";
import cors from "cors";
 
import projectRoutes from "./routes/project.route.js";
import clientRoutes from "./routes/client.route.js";
import contactRoutes from "./routes/contact.route.js";
import newsletterRoutes from "./routes/newsletter.route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
 
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

 
app.use("/projects", projectRoutes);
app.use("/clients", clientRoutes);
app.use("/contacts", contactRoutes);
app.use("/newsletter", newsletterRoutes);
app.use("/uploads", express.static("uploads"));

 
 
app.listen(process.env.PORT, () => console.log("Server started on port " + process.env.PORT));
