import React from "react";
import { useNavigate } from "react-router-dom";

function InterviewSummary() {
  const navigate = useNavigate();

  // Dummy AI feedback (later comes from backend/AI)
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
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Mock Interview Feedback 🤖</h2>

      <h3>Score: {feedback.score} / 10</h3>

      <h4>Strengths</h4>
      <ul>
        {feedback.strengths.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <h4>Areas to Improve</h4>
      <ul>
        {feedback.improvements.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <br />

      <button
        onClick={() => navigate("/trackme")}
        style={{ padding: "10px 20px", marginRight: "10px" }}
      >
        Track My Progress
      </button>

      <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px" }}
      >
        Back to Dashboard
      </button>
    </div>
  );
}

export default InterviewSummary;
