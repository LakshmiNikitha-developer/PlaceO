
import React from "react";
import { useNavigate } from "react-router-dom";
import "./TestSummary.css";

function TestSummary() {
  const navigate = useNavigate();

  // demo data (later backend will send real data)
  const summary = {
    score: 18,
    total: 25,
    accuracy: 72,
    correct: 18,
    wrong: 5,
    skipped: 2,
    timeTaken: "08:32",
  };

  return (
    <div className="summary-wrapper">
      <div className="summary-card glass">
        <h2>🎉 Test Submitted Successfully</h2>

        {/* SCORE */}
        <div className="score-circle">
          <span>{summary.score}</span>
          <small>/ {summary.total}</small>
        </div>

        {/* STATS */}
        <div className="stats">
          <div>
            <h4>Accuracy</h4>
            <p>{summary.accuracy}%</p>
          </div>
          <div>
            <h4>Time Taken</h4>
            <p>{summary.timeTaken}</p>
          </div>
        </div>

        {/* BREAKDOWN */}
        <div className="breakdown">
          <div className="bar correct">
            Correct <span>{summary.correct}</span>
          </div>
          <div className="bar wrong">
            Wrong <span>{summary.wrong}</span>
          </div>
          <div className="bar skipped">
            Skipped <span>{summary.skipped}</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="summary-actions">
          <button onClick={() => navigate("/dashboard")}>
            Go to Dashboard
          </button>
          <button className="secondary">
            Review Answers
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestSummary;
