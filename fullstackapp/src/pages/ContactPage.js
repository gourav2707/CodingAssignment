import React, { useState } from "react";
import axios from "axios";
import './ContactPage.css';
import Navbar from "../components/Navbar";
import ApiConfig from "../ApiConfig";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/contacts/createContact", formData);
      alert("Form submitted successfully!");
      setFormData({ fullName: "", email: "", mobile: "", city: "" });
    } catch (err) {
      alert("Submission failed.");
      console.error(err);
    }
  };
const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post(ApiConfig.SUBSCRIBE, { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      alert("Subscription failed.");
      console.error(err);
    }
  };

  return (
    <> 
    <Navbar/>
    <div className="contact-page">
      <div className="consultation-heading">
          <strong>Consultation</strong>, <strong>Design</strong> & <strong>Marketing</strong>
        </div>
      <div className="contact-container">
        <h2>Get a Free Consultation</h2>
         
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="city" placeholder="Area, City" value={formData.city} onChange={handleChange} required />
          <button type="submit">Get Quick Quote</button>
        </form>
      </div>
    </div>
     <div className="newsletter-page">
      <div className="newsletter-box">
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </>);
};

export default ContactPage;