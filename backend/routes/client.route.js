// server/routes/clientRoutes.js
import express from "express";
import { getClients, createClient } from "../controllers/client.controller.js";
import upload from "../middleware/upload.js";
const router = express.Router();

router.get("/fetch", getClients);
router.post("/create", upload.single("image"), createClient);

export default router;
