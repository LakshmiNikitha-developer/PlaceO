import React from "react";
import "./TrackMe.css";

export default function TrackMe() {
  const user = {
    name: "Nikitha",
    level: "Intermediate",
    joined: "Jan 2026",
  };

  const stats = [
    { title: "Today's Progress", value: "1 / 3", icon: "📅" },
    { title: "Weekly Consistency", value: "68%", icon: "📊" },
    { title: "Current Streak", value: "5 Days", icon: "🔥" },
    { title: "Total Tests Taken", value: "12", icon: "🧪" },
  ];

  const weeklyData = [
    { day: "Sun", percent: 70 },
    { day: "Mon", percent: 50 },
    { day: "Tue", percent: 80 },
    { day: "Wed", percent: 30 },
    { day: "Thu", percent: 60 },
    { day: "Fri", percent: 75 },
    { day: "Today", percent: 40 },
  ];

  return (
    <div className="track-wrapper">
      {/* HEADER */}
      <div className="track-header glass">
        <h2>Welcome back, {user.name} 👋</h2>
        <p>
          Level: <b>{user.level}</b> • Joined: {user.joined}
        </p>
      </div>

      {/* STATS */}
      <div className="stats-grid">
        {stats.map((item, i) => (
          <div className="stat-card glass" key={i}>
            <span className="stat-icon">{item.icon}</span>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* WEEKLY OVERVIEW */}
      <div className="weekly-section glass">
        <h3>Weekly Performance Overview</h3>

        <div className="weekly-bars">
          {weeklyData.map((d, i) => (
            <div className="day-row" key={i}>
              <span className="day-label">{d.day}</span>
              <div className="bar-bg">
                <div
                  className="bar-fill"
                  style={{ width: `${d.percent}%` }}
                ></div>
              </div>
              <span className="percent">{d.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
