import { useState } from "react";
import "./card.css"; // Import your CSS file

export default function Card() {
  const [isExpanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(!isExpanded);
  }

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleExpand}
    >
      <div className="card-header">{<h1>hello</h1>}</div>
      {isExpanded && <div className="card-content">{<h1>world</h1>}</div>}
    </div>
  );
}
