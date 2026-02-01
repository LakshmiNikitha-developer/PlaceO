// InterviewSummary.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./MockInterview.css";

function InterviewSummary() {
  const navigate = useNavigate();

  // Dummy AI feedback (later comes from backend / AI)
  const feedback = {
    score: 7,
    strengths: [
      "Clear communication",
      "Good understanding of React basics"
    ],
    improvements: [
      "Explain concepts with examples",
      "Reduce pauses while answering"
    ]
  };

  return (
    <div className="summary-container">
      <div className="summary-card">
        <h2>Mock Interview Feedback 🤖</h2>

        <h3>Score: {feedback.score} / 10</h3>

        <h3>Strengths</h3>
        <ul>
          {feedback.strengths.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Areas to Improve</h3>
        <ul>
          {feedback.improvements.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="summary-actions">
          <button onClick={() => navigate("/trackme")}>
            Track My Progress
          </button>

          <button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default InterviewSummary;
