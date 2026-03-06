import React from "react";
import { Link } from "react-router-dom";

export default function TopicCard({ title, link, subtitle }) {
  return (
    <Link to={link} className="card">
      <h3>{title}</h3>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
    </Link>
  );
}
