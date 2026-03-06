import React, { useEffect, useState } from "react";

// helper to render question list
function renderQuestions(questions) {
  return questions.map((q, i) => {
    const text = q.question || q.questionText || "";
    return (
      <div
        key={i}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
        }}
      >
        <p>
          <b>Q{i + 1}. {text}</b>
        </p>
        <p>
          <b>Answer:</b> {q.correctAnswer}
        </p>
        {q.explanation && (
          <p>
            <b>Explanation:</b> {q.explanation}
          </p>
        )}
      </div>
    );
  });
}

export default function Algorithms() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/tests?category=coding&subcategory=algorithms")
      .then((res) => res.json())
      .then((data) => {
        if (data.tests && data.tests.length > 0) {
          setQuestions(data.tests[0].questions);
        } else {
          setQuestions([]);
        }
      })
      .catch((err) => {
        console.error("Failed to load questions", err);
        setQuestions([]);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Algorithms</h2>
      {questions === null ? (
        <p>Loading...</p>
      ) : questions.length === 0 ? (
        <p>No questions available yet. Please check again later.</p>
      ) : (
        renderQuestions(questions)
      )}
    </div>
  );
}
