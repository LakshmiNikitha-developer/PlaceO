import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">PLACEO</div>
        <ul className="nav-links">
          
          <li onClick={() => navigate("/contact")}>Contact Us</li>
        </ul>
      </nav>

      {/* Intro section */}
      <div className="intro-content">
        <h1 className="intro-title">PLACEO</h1>

        {/* Curvy animated line */}
        <svg
          className="animated-line"
          viewBox="0 0 500 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C100,0 200,50 300,25 C400,0 500,50 600,25"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="transparent"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7f50" />
              <stop offset="100%" stopColor="#7b5fff" />
            </linearGradient>
          </defs>
        </svg>

        <p className="intro-subtitle">
          Your one-stop platform for aptitude, coding, and interview prep
        </p>

        <button
          className="get-started-btn"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
