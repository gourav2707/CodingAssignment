// routes/newsletterRoutes.js
import express from "express";
import { subscribeEmail, getSubscribers } from "../controllers/newsletter.controller.js";

const router = express.Router();

router.post("/Subscribe", subscribeEmail);
router.get("/getSubscribe", getSubscribers);

export default router;
