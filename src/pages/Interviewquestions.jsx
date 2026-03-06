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
        <TopicCard title="TCS" link="/interview/tcs" />
        <TopicCard title="Infosys" link="/interview/infosys" />
        <TopicCard title="Wipro" link="/interview/wipro" />
        <TopicCard title="Accenture" link="/interview/accenture" />
        <TopicCard title="Cognizant" link="/interview/cognizant" />
        <TopicCard title="Capgemini" link="/interview/capgemini" />
        <TopicCard title="Amazon" link="/interview/amazon" />
        <TopicCard title="Google" link="/interview/google" />
        <TopicCard title="Microsoft" link="/interview/microsoft" />
      </div>
    </div>
  );
}


