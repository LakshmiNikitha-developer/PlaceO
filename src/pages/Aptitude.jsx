import React from "react";
import TopicCard from "../components/TopicCard";

export default function Aptitude() {
  return (
    <>
      <h2>Aptitude Topics</h2>
      <div className="grid">
        <TopicCard title="Verbal Ability" link="/aptitude/verbal" />
        <TopicCard title="Quantitative Aptitude" link="/aptitude/quant" />
        <TopicCard title="Logical Reasoning" link="/aptitude/logical" />
        <TopicCard title="Probability" link="/aptitude/probability" />
        <TopicCard title="Reasoning" link="/aptitude/reasoning" />
      </div>
    </>
  );
}


