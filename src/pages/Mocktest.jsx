import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Mocktest.css";

function Mocktest() {


  const navigate = useNavigate();
  
  const [selected, setSelected] = useState("General");

  const templates = {
    General: {
      desc: "Basic aptitude test with MCQs",
      sections: "1 Section",
      marking: "+1, -0.25",
    },
    CAT: {
      desc: "CAT level aptitude and reasoning",
      sections: "3 Sections",
      marking: "+3, -1",
    },
    UPSC: {
      desc: "UPSC GS Paper 1 mock",
      sections: "1 Section",
      marking: "+2, -0.66",
    },
    JEE: {
      desc: "JEE Main mock paper",
      sections: "3 Sections",
      marking: "+4, -1",
    },
  };

  return (
    <div className="mock-container">
      <h2>Select Quiz Template</h2>

      <div className="mock-box">
        <div className="mock-left">
          {Object.keys(templates).map((key) => (
            <label key={key} className="radio-item">
              <input
                type="radio"
                name="template"
                value={key}
                checked={selected === key}
                onChange={() => setSelected(key)}
              />
              {key}
            </label>
          ))}
        </div>

        <div className="mock-right">
          <h3>Description</h3>
          <p>{templates[selected].desc}</p>
          <p>Sections: {templates[selected].sections}</p>
          <p>Marking: {templates[selected].marking}</p>
        </div>
      </div>

      <div className="mock-buttons">
        <button>Cancel</button>
        <button onClick={() => navigate("/take-test")}>Create</button>

      </div>
    </div>
  );
}

export default Mocktest;

