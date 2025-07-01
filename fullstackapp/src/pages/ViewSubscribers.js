import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewSubscribers.css";
import AdminNavbar from "./AdminNavbar";
import ApiConfig from "../ApiConfig";

const ViewSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await axios.get(ApiConfig.GET_SUBSCRIBERS);
      setSubscribers(res.data);
    } catch (err) {
      console.log("Error fetching subscribers", err);
    }
  };

  return (<>
  <AdminNavbar/>
    <div className="view-subscribers-page">
      <h2>Newsletter Subscribers</h2>
      {subscribers.length === 0 ? (
        <p>No subscribers yet.</p>
      ) : (
        <ul className="subscriber-list">
          {subscribers.map((s, index) => (
            <li key={index}>{s.email}</li>
          ))}
        </ul>
      )}
    </div>
 </> );
};

export default ViewSubscribers;
