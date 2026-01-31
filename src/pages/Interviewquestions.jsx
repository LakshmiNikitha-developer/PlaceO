import React from "react";
import { Link } from "react-router-dom";

export default function Interviewquestions() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Interview Questions by Company</h2>

      <div className="grid">
        <Link className="card" to="/interview/google">Google</Link>
        <Link className="card" to="/interview/amazon">Amazon</Link>
        <Link className="card" to="/interview/tcs">TCS</Link>
        <Link className="card" to="/interview/deloitte">Deloitte</Link>
      </div>
    </div>
  );
}

