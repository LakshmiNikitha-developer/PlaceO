import React from "react";
import TopicCard from "../components/TopicCard";
import "./Coding.css";

export default function Coding() {
  return (
    <div className="coding-wrapper">
      <h2 className="page-title"> Coding Practice</h2>
      <p className="page-subtitle">
        Master data structures, algorithms, and problem-solving skills required
        for top product-based and service-based companies.
      </p>

      <div className="coding-grid">
        <TopicCard title="C Programming" link="/coding/c" />
        <TopicCard title="Java" link="/coding/java" />
        <TopicCard title="Python" link="/coding/python" />
        <TopicCard title="Data Structures" link="/coding/dsa" />
        <TopicCard title="Algorithms" link="/coding/algorithms" />
        <TopicCard title="Competitive Coding" link="/coding/competitive" />
      </div>
    </div>
  );
}
