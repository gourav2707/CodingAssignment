// server/models/Client.js
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String, required: true }
} );

export default mongoose.model("Client", clientSchema);
