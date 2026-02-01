import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./TakeTest.css";

function TakeTest() {
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  const [time, setTime] = useState(600); // 10 minutes
  const [violations, setViolations] = useState(0);

  useEffect(() => {
    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }

    // Block ESC
    const blockEsc = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        alert("You cannot exit fullscreen during the test!");
      }
    };

    // Tab switch detection
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setViolations((prev) => {
          const count = prev + 1;
          alert(`Warning ${count}: Tab switching is not allowed!`);

          if (count >= 3) {
            alert("Too many violations. Test submitted!");
            handleSubmit();
          }
          return count;
        });
      }
    };

    document.addEventListener("keydown", blockEsc);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Timer
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Time up! Test submitted.");
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      document.removeEventListener("keydown", blockEsc);
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    navigate("/test-summary");
  };

  return (
    <div className="test-wrapper">
      {/* HEADER */}
      <div className="test-header glass">
        <h2>📝 Mock Test</h2>
        <div className="timer">
          ⏳ {Math.floor(time / 60)}:
          {String(time % 60).padStart(2, "0")}
        </div>
      </div>

      {/* QUESTION */}
      <div className="question-card glass">
        <h3>Q1. What is 10 + 20?</h3>

        <div className="options">
          <label>
            <input type="radio" name="q1" /> 20
          </label>
          <label>
            <input type="radio" name="q1" /> 30
          </label>
          <label>
            <input type="radio" name="q1" /> 40
          </label>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="test-actions">
        <button className="secondary">Next</button>
        <button className="primary" onClick={handleSubmit}>
          Submit Test
        </button>
      </div>
    </div>
  );
}

export default TakeTest;
