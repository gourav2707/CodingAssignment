import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';
import ClientCard from '../components/ClientCard';
import './LandingPage.css';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchProjects();
    fetchClients();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:3000/projects/fetch');
      setProjects(res.data);
    } catch (err) {
      console.log("Error fetching projects", err);
    }
  };

  const fetchClients = async () => {
    try {
      const res = await axios.get('http://localhost:3000/clients/fetch');
      setClients(res.data);
    } catch (err) {
      console.log("Error fetching clients", err);
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

      {/* Clients Section */}
      <section className="section clients-section">
        <h2 className="section-title">Happy Clients</h2>
        <div className="card-container">
          {clients.map((client) => (
            <ClientCard key={client._id} {...client} />
          ))}
        </div>
      </section>

      
    </div>
  </>);
};

export default LandingPage;
