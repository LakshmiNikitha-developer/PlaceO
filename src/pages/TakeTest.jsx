import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function TakeTest() {

    const navigate = useNavigate();

  const [time, setTime] = useState(600); // 10 minutes

useEffect(() => {
  // Fullscreen
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  let violations = 0;

  // ESC block
  const blockEsc = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      alert("You cannot exit fullscreen during the test!");
    }
  };

  // TAB SWITCH DETECTION
  const handleVisibilityChange = () => {
    if (document.hidden) {
      violations += 1;
      alert(
        `Warning ${violations}: Tab switching is not allowed!`
      );

      if (violations >= 3) {
        alert("Too many violations. Test submitted!");
        // later: submit test automatically
      }
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
  alert("Test submitted!");
  navigate("/test-summary");
};


  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Mock Test</h2>
      <p>
        Time Left: {Math.floor(time / 60)}:
        {String(time % 60).padStart(2, "0")}
      </p>

      <hr />

      <h3>Q1. What is 10 + 20?</h3>

      <div>
        <label><input type="radio" name="q1" /> 20</label><br />
        <label><input type="radio" name="q1" /> 30</label><br />
        <label><input type="radio" name="q1" /> 40</label><br />
      </div>

      <br />

      <button>Next</button>
        
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Submit</button>

    </div>
  );
}

export default TakeTest;
