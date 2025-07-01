// server/controllers/projectController.js
import Project from "../models/project.js";

export const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

 

export const createProject = async (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? req.file.filename : "";

  const newProject = new Project({ name, description, image });
  await newProject.save();

  res.status(201).json({ message: "Project added with image" });
};
