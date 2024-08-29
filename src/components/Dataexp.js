// ExpertDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./data.css";

const Dataexp = ({ expert }) => {
  return (
    <div className="expert-details-container">
      <img src={expert.imageUrl} alt={expert.name} />
      <div className="expert-info">
        <h2>{expert.name}</h2>
        <p>{expert.message}</p>
        {/* Add any additional information you want to display */}
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Dataexp;
