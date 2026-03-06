import React, { useEffect, useState } from "react";
import TopicCard from "../components/TopicCard";
import "./Aptitude.css";

// mapping from subcategory slug to display name
const displayNames = {
  verbal: "Verbal Ability",
  quant: "Quantitative Aptitude",
  logical: "Logical Reasoning",
  probability: "Probability",
  reasoning: "Reasoning"
};

export default function Aptitude() {
  const [topics, setTopics] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching aptitude tests from API...");
    fetch("http://localhost:3000/api/tests?category=aptitude")
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        if (data.tests && Array.isArray(data.tests) && data.tests.length > 0) {
          // group by subcategory
          const grouped = {};
          data.tests.forEach((t) => {
            if (!grouped[t.subcategory]) grouped[t.subcategory] = 0;
            grouped[t.subcategory] += t.totalQuestions || 0;
          });
          console.log("Grouped topics:", grouped);
          setTopics(grouped);
        } else {
          console.warn("No tests returned from API");
          setTopics({});
        }
      })
      .catch((err) => {
        console.error("Error fetching aptitude topics:", err);
        setError(err.message);
        setTopics({});
      });
  }, []);

  return (
    <div className="aptitude-wrapper">
      <h2 className="page-title">Aptitude Preparation</h2>
      <p className="page-subtitle">
        Strengthen your fundamentals with topic-wise aptitude practice designed
        for placements.
      </p>

      {error && <p style={{color: 'red', marginBottom: '20px'}}>Error: {error}</p>}

      <div className="aptitude-grid">
        {topics === null ? (
          <p>Loading topics...</p>
        ) : Object.keys(topics).length === 0 ? (
          <p>No aptitude topics available. Make sure the backend is running.</p>
        ) : Object.keys(displayNames).map((slug) => (
          <TopicCard
            key={slug}
            title={displayNames[slug]}
            link={`/aptitude/${slug}`}
            subtitle={
              topics[slug] ? `${topics[slug]} questions` : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}



