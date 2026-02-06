import React from "react";

export default function Verbal() {
  const questions = [
    {
      q: "Synonym of Rapid?",
      a: "Fast",
      e: "Rapid means something that happens quickly."
    },
    {
      q: "Antonym of Honest?",
      a: "Dishonest",
      e: "Honest means truthful, so its opposite is dishonest."
    },
    {
      q: "Choose the correct spelling:",
      a: "Accommodate",
      e: "Accommodate has double C and double M."
    }
  ];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Verbal Ability</h2>

      {questions.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "20px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)"
          }}
        >
          <p><b>Q{index + 1}. {item.q}</b></p>
          <p><b>Answer:</b> {item.a}</p>
          <p><b>Explanation:</b> {item.e}</p>
        </div>
      ))}
    </div>
  );
}

