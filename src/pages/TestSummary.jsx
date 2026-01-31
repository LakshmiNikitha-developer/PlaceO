import React from "react";
import { useNavigate } from "react-router-dom";

function TestSummary() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Test Submitted Successfully ✅</h2>
      <p>Your responses have been recorded.</p>

      <button
        onClick={() => navigate("/dashboard")}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}

export default TestSummary;
