import React from 'react';
import './Card.css';
import ApiConfig from '../ApiConfig';

function ClientCard({ name, description, designation, image }) {
  return (
    <div className="card">
      <img src={`${ApiConfig.UPLOAD}/${image}`} alt={name} className="client-img" />
      <p>"{description}"</p>
      <h4>{name}</h4>
      <small>{designation}</small>
    </div>
  );
}

export default ClientCard;
