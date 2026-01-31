
import React from "react";
import "./Trackme.css";

function Trackme() {
  const user = {
    name: "Nikitha",
    email: "nikitha@gmail.com",
    joined: "10 Jan 2026",
    level: "Intermediate",
  };

  const testHistory = [
    { date: "29 Jan", score: 65 },
    { date: "30 Jan", score: 72 },
    { date: "31 Jan", score: 78 },
    { date: "01 Feb", score: 82 },
  ];

  return (
    <div className="track-container">
      <h2 className="track-title">📊 Track Me</h2>

      {/* USER PROFILE */}
      <div className="track-card profile-card">
        <h3 className="section-title">👤 User Profile</h3>

        <div className="profile-row">
          <span className="profile-label">Name</span>
          <span className="profile-value">{user.name}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">{user.email}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Joined</span>
          <span className="profile-value">{user.joined}</span>
        </div>

        <div className="profile-row">
          <span className="profile-label">Level</span>
          <span className="profile-value">{user.level}</span>
        </div>
      </div>

      {/* TEST HISTORY */}
      <div className="track-card">
        <h3 className="section-title">📝 Test History</h3>

        <div className="history-list">
          {testHistory.map((t, i) => (
            <div className="history-item" key={i}>
              <span>{t.date} – Mock Test</span>
              <b>{t.score}%</b>
            </div>
          ))}
        </div>
      </div>

      {/* PERFORMANCE GRAPH */}
      <div className="track-card">
        <h3 className="section-title">📈 Performance Graph</h3>

        <div className="graph">
          {testHistory.map((t, i) => (
            <div key={i} className="bar-container">
              <div
                className="bar"
                style={{ height: `${t.score * 1.3}px` }}
              ></div>
              <div className="bar-label">{t.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trackme;

