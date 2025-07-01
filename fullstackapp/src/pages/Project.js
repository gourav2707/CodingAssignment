import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import ClientCard from '../components/ClientCard';
import './Project.css';
import Navbar from '../components/Navbar';
import ApiConfig from '../ApiConfig';

const Project = () => {
  const [projects, setProjects] = useState([]);
   

  useEffect(() => {
    fetchProjects();
    
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get(ApiConfig.GET_PROJECTS);
      setProjects(res.data);
    } catch (err) {
      console.log("Error fetching projects", err);
    }
  };

   

  return (
    <> 
    <Navbar/>
    <div className="landing-page">
      
      
      {/* Projects Section */}
      <section className="section projects-section">
        <h2 className="section-title">Our Projects</h2>
        <div className="card-container">
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      </section>

      

      
    </div>
 </> );
};

export default Project;
