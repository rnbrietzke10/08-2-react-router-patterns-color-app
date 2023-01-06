import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Color.css';
const Color = () => {
  const routeParams = useParams();

  return (
    <div
      className="color-container"
      style={{ backgroundColor: routeParams.color }}
    >
      <h2>This color is {routeParams.color}</h2>
      <Link to="/colors" className="btn-back">
        Go back
      </Link>
    </div>
  );
};

export default Color;
