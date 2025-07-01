 
import express from "express";
import { getProjects, createProject } from "../controllers/project.controller.js";
 
import upload from "../middleware/upload.js";
const router = express.Router();

router.get("/fetch", getProjects);
router.post("/create", upload.single("image"), createProject);

export default router;
