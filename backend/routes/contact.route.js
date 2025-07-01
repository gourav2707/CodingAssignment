// routes/contactRoutes.js
import express from "express";
import { submitContact, getContacts } from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/createContact", submitContact);
router.get("/getContact", getContacts);

export default router;
