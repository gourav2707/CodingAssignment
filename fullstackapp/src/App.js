// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
 
import ContactPage from "./pages/ContactPage";
import NewsletterPage from "./pages/NewsletterPage";
 
import ViewSubscribers from "./pages/ViewSubscribers";
import ViewContacts from "./pages/ViewContacts";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import Clients from "./pages/Clients";
import AddProject from "./pages/AddProject";
import AddClient from "./pages/AddClient";
function App() {
  return (
    
    <Router>
        
      <Routes>
        
        <Route path="/" element={<ContactPage />} />
         
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
         <Route path="/admin" element={<AddProject/>} />
         <Route path="/admin/contacts" element={<ViewContacts />} />
         <Route path="/admin/subscribers" element={<ViewSubscribers />} />
         <Route path="/projects" element={<Project/>} />
          <Route path="/clients" element={<Clients/>} />
          <Route path="/addprojects" element={<AddProject/>} />
          <Route path="/addclients" element={<AddClient/>} />
         
      </Routes>
    </Router>
  );
}

export default App;
