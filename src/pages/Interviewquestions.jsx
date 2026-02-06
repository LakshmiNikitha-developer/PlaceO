import React from "react";
import TopicCard from "../components/TopicCard";
import "./Interviewquestions.css";

export default function Interview() {
  return (
    <div className="interview-wrapper">
      <h2 className="page-title">🎯 Interview Questions</h2>
      <p className="page-subtitle">
        Practice real interview questions asked by top companies and
        prepare confidently for your placement journey.
      </p>

      <div className="interview-grid">
        <TopicCard title="TCS" link="/interview/TCS" />
        <TopicCard title="Infosys" link="/interview/Infosys" />
        <TopicCard title="Wipro" link="/interview/Wipro" />
        <TopicCard title="Accenture" link="/interview/Accenture" />
        <TopicCard title="Cognizant" link="/interview/Cognizant" />
        <TopicCard title="Capgemini" link="/interview/Capgemini" />
        <TopicCard title="Amazon" link="/interview/Amazon" />
        <TopicCard title="Google" link="/interview/Google" />
        <TopicCard title="Microsoft" link="/interview/Microsoft" />
      </div>
    </div>
  );
}


