import React, { useState } from "react";
import axios from "axios";
import "./AddProject.css";
import AdminNavbar from "./AdminNavbar";
import ApiConfig from "../ApiConfig";

const AddProject = () => {
  const [project, setProject] = useState({
    name: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProject({ ...project, image: e.target.files[0] });
    } else {
      setProject({ ...project, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", project.name);
      formData.append("description", project.description);
      formData.append("image", project.image);

      await axios.post(ApiConfig.ADD_PROJECT, formData);
      alert("Project added successfully!");
      setProject({ name: "", description: "", image: null });
    } catch (err) {
      alert("Error adding project.");
      console.error(err);
    }
  };

  return (<>
  <AdminNavbar/>
    <div className="add-project-page">
      <div className="form-box">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={project.name}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Project</button>
        </form>
      </div>
    </div>
 </> );
};

export default AddProject;
