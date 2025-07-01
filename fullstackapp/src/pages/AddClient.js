import React, { useState } from "react";
import axios from "axios";
import "./AddClient.css";
import AdminNavbar from "./AdminNavbar";
import "../ApiConfig"
import ApiConfig from "../ApiConfig";
const AddClient = () => {
  const [client, setClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setClient({ ...client, image: e.target.files[0] });
    } else {
      setClient({ ...client, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", client.name);
      formData.append("description", client.description);
      formData.append("designation", client.designation);
      formData.append("image", client.image);

      await axios.post(ApiConfig.ADD_CLIENT, formData);
      alert("Client added successfully!");
      setClient({ name: "", description: "", designation: "", image: null });
    } catch (err) {
      alert("Error adding client.");
      console.error(err);
    }
  };

  return (<>
  <AdminNavbar/>
    <div className="add-client-page">
      <div className="form-box">
        <h2>Add New Client</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={client.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Client Feedback"
            value={client.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="designation"
            placeholder="Client Designation"
            value={client.designation}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Client</button>
        </form>
      </div>
    </div>
  </>);
};

export default AddClient;
