import React from 'react';
import './Card.css';
import ApiConfig from '../ApiConfig';

function ProjectCard({ name, description, image }) {
  return (
    <div className="card">
      <img src={`${ApiConfig.UPLOAD}/${image}`} alt={name} className="card-img" />
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="read-more-btn" disabled>Read More</button>
    </div>
  );
}

export default ProjectCard;
