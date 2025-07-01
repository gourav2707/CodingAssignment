import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewContacts.css";
import AdminNavbar from "./AdminNavbar";
import NewsletterPage from "./NewsletterPage";
import ApiConfig from "../ApiConfig";

const ViewContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(ApiConfig.GET_CONTACTS);
      setContacts(res.data);
    } catch (err) {
      console.log("Error fetching contacts", err);
    }
  };

  return (<>
  <AdminNavbar/>
    <div className="view-contacts-page">
      <h2>Contact Form Submissions</h2>
      {contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i}>
                <td>{c.fullName}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <NewsletterPage/>
  </>);
};

export default ViewContacts;
