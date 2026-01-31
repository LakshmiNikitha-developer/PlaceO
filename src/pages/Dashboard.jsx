import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">

      {/* Glass Navbar */}
      <nav className="navbar glass">
        <h2 className="logo">PLACEO</h2>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>

      {/* Chatbot */}
      <div className="chatbot glass">
        <span className="bot-icon" style={{ color: "#ff7f50" }}>🤖 Ask The Chatbot</span>
        <input placeholder="Ask something..." />
      </div>

      {/* Cards Grid */}
      <div className="grid">
        <Link to="/aptitude" className="card">📘 Aptitude</Link>
        <Link to="/coding" className="card">💻 Coding</Link>
        <Link to="/interview" className="card">🎯 Interview Questions</Link>

        <Link to="/mocktest" className="card">📝 Mock Test</Link>
        <Link to="/mockinterview" className="card">🗣 Mock Interview</Link>
        <Link to="/trackme" className="card">📊 Track Me</Link>
      </div>

      {/* About Us Section (BOTTOM) */}
      <section className="about-section">
        <h2>About PLACEO</h2>
        <p>
          PLACEO is a student-centric placement preparation platform built to
          empower learners with aptitude practice, coding challenges, company-
          specific interview questions, full-length mock tests, and AI-powered
          mock interviews. Our mission is to bridge the gap between learning and
          real-world placements by giving students confidence, clarity, and
          continuous progress tracking.
        </p>
      </section>

    </div>
  );
}
