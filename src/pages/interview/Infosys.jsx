import React, { useState, useEffect } from "react";
import "./InterviewPage.css";

export default function Infosys() {
  const [questions, setQuestions] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/tests?category=interview&subcategory=infosys`
        );
        const data = await response.json();
        
        if (data.tests && data.tests.length > 0) {
          setQuestions(data.tests[0].questions || []);
        }
      } catch (err) {
        setError("Failed to load interview questions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (loading) {
    return <div className="interview-container"><p>Loading questions...</p></div>;
  }

  if (error) {
    return <div className="interview-container"><p className="error">{error}</p></div>;
  }

  return (
    <div className="interview-container">
      <h1>Infosys Interview Questions</h1>
      <p className="count">Total Questions: {questions.length}</p>

      <div className="questions-list">
        {questions.length > 0 ? (
          questions.map((q, index) => (
            <div
              key={index}
              className="question-card"
              onClick={() => toggleExpand(index)}
            >
              <div className="question-header">
                <h3 className="question-text">
                  Q{index + 1}. {q.questionText}
                </h3>
                <span className={`expand-icon ${expandedIndex === index ? "active" : ""}`}>
                  {expandedIndex === index ? "−" : "+"}
                </span>
              </div>

              {expandedIndex === index && (
                <div className="question-body">
                  <div className="answer-section">
                    <h4>Answer:</h4>
                    <p>{q.answer}</p>
                  </div>
                  <div className="meta-info">
                    <span className="topic">{q.topic || "General"}</span>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-questions">No questions available for this category.</p>
        )}
      </div>
    </div>
  );
}
