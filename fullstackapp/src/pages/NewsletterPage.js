import React, { useState } from "react";
import axios from "axios";
import "./NewsletterPage.css";

const NewsletterPage = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/newsletter", { email });
      alert("Subscribed successfully!");
      setEmail("");
    } catch (err) {
      alert("Subscription failed.");
      console.error(err);
    }
  };

  return (
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
  );
};

export default NewsletterPage;
