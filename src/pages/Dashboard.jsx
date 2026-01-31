import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I’m PLACEO Bot. I can help you with aptitude, coding, interviews, and placement prep!"
    }
  ]);

  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };

    // Temporary demo reply – AI engineer will replace this logic
    const botMsg = {
      sender: "bot",
      text: "🤖 Thanks for your question! AI-powered answers will be available here very soon."
    };

    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="dashboard-wrapper">

      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <h2 className="logo">PLACEO</h2>
        <Link to="/contact" className="nav-link">Contact Us</Link>
      </nav>

      {/* ---------- CHATBOT ---------- */}
      <div className="chatbot glass">
        <h3 className="chat-title">🤖 PLACEO Chatbot</h3>

        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-input">
          <label className="upload-icon">
    📎
    <input type="file" hidden />
  </label>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about aptitude, coding, interviews..."
            onKeyDown={e => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* ---------- FEATURE CARDS ---------- */}
      <div className="grid">
        <Link to="/aptitude" className="card">📘 Aptitude</Link>
        <Link to="/coding" className="card">💻 Coding</Link>
        <Link to="/interview" className="card">🎯 Interview Questions</Link>
        <Link to="/mocktest" className="card">📝 Mock Test</Link>
        <Link to="/mockinterview" className="card">🗣 Mock Interview</Link>
        <Link to="/trackme" className="card">📊 Track Me</Link>
      </div>

      {/* ---------- ABOUT PLACEO ---------- */}
      <section className="about-section glass">
        <h2>About PLACEO</h2>
        <p>
          <strong>PLACEO</strong> is a modern, student-centric placement
          preparation platform built to transform the way learners prepare for
          careers. We combine structured learning, real-world practice, and
          intelligent guidance to help students move from confusion to
          confidence.
        </p>

        <p>
          Our platform offers in-depth <strong>aptitude training</strong>,
          hands-on <strong>coding practice</strong>, company-specific
          <strong> interview questions</strong>, realistic
          <strong> mock tests</strong>, and AI-powered
          <strong> mock interviews</strong> that simulate actual placement
          scenarios.
        </p>

        <p>
          What makes PLACEO different is our focus on
          <strong> continuous improvement</strong>. With performance tracking,
          personalized insights, and upcoming AI mentorship, students can
          clearly see their progress and understand exactly where to improve.
        </p>

        <p>
          Our mission is simple: to bridge the gap between learning and real-world
          placements by empowering students with the right tools, the right
          practice, and the right confidence — all in one platform.
        </p>
      </section>

    </div>
  );
}
