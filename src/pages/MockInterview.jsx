// Mockinterview.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  "Tell me about yourself.",
  "What is React and why is it used?",
  "Explain the difference between var, let, and const.",
  "What are your strengths and weaknesses?"
];

function MockInterview() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: questions[0] }
  ]);
  const [time, setTime] = useState(60);

  // Timer per question
  useEffect(() => {
    setTime(60);
    const timer = setInterval(() => {
      setTime((t) => {
        if (t <= 1) {
          handleNext();
          return 60;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (answer.trim() !== "") {
      setChat((prev) => [
        ...prev,
        { from: "user", text: answer }
      ]);
    }

    if (current + 1 < questions.length) {
      setChat((prev) => [
        ...prev,
        { from: "bot", text: questions[current + 1] }
      ]);
      setCurrent(current + 1);
      setAnswer("");
    } else {
      navigate("/interview-summary");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Mock Interview</h2>
      <p>Time left: {time}s</p>

      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          padding: "10px",
          overflowY: "auto",
          marginBottom: "10px"
        }}
      >
        {chat.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.from === "bot" ? "left" : "right",
              margin: "5px 0"
            }}
          >
            <b>{msg.from === "bot" ? "Interviewer" : "You"}:</b>{" "}
            {msg.text}
          </div>
        ))}
      </div>

      <textarea
        rows="4"
        style={{ width: "100%" }}
        placeholder="Type your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleNext}>
        {current + 1 === questions.length ? "Submit Interview" : "Next"}
      </button>
    </div>
  );
}

export default MockInterview;

