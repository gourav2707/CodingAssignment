// server/controllers/clientController.js
import Client from "../models/client.js";

export const getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

 
export const createClient = async (req, res) => {
  const { name, description, designation} = req.body;
  const image = req.file ? req.file.filename : "";

   const newClient = new Client({ name, description, designation, image });
  await newClient.save();

  res.status(201).json({ message: "Client added with image" });
};