import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
import ClientCard from '../components/ClientCard';
import './LandingPage.css';
import Navbar from '../components/Navbar';
import ApiConfig from '../ApiConfig';

const LandingPage = () => {
   
  const [clients, setClients] = useState([]);

  useEffect(() => {
    
    fetchClients();
  }, []);

  

  const fetchClients = async () => {
    try {
      const res = await axios.get(ApiConfig.GET_CLIENTS);
      setClients(res.data);
    } catch (err) {
      console.log("Error fetching clients", err);
    }
  };

  return (
    <> 
    <Navbar/>
    <div className="landing-page">
      
      
      

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
