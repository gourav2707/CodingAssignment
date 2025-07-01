// controllers/contactController.js
import Contact from "../models/contact.js";

export const submitContact = async (req, res) => {
  const { fullName, email, mobile, city } = req.body;
  const contact = new Contact({ fullName, email, mobile, city });
  await contact.save();
  res.status(201).json({ message: "Contact form submitted" });
};

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};
