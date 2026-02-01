import React from "react";
import TopicCard from "../components/TopicCard";
import "./Aptitude.css";

export default function Aptitude() {
  return (
    <div className="aptitude-wrapper">
      <h2 className="page-title"> Aptitude Preparation</h2>
      <p className="page-subtitle">
        Strengthen your fundamentals with topic-wise aptitude practice designed
        for placements.
      </p>

      <div className="aptitude-grid">
        <TopicCard title="Verbal Ability" link="/aptitude/verbal" />
        <TopicCard title="Quantitative Aptitude" link="/aptitude/quant" />
        <TopicCard title="Logical Reasoning" link="/aptitude/logical" />
        <TopicCard title="Probability" link="/aptitude/probability" />
        <TopicCard title="Reasoning" link="/aptitude/reasoning" />
      </div>
    </div>
  );
}



