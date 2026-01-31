import React from "react";
import { Link } from "react-router-dom";

export default function TopicCard({ title, link }) {
  return (
    <Link to={link} className="card">
      <h3>{title}</h3>
    </Link>
  );
}
