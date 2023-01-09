import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import './Color.css';
const Color = ({ colors }) => {
  const { color } = useParams();
  if (!colors.hasOwnProperty(color)) {
    return <Navigate to="/colors" replace={true} />;
  }

  const hex = colors[color];
  return (
    <div>
      <div className="color-container" style={{ backgroundColor: hex }}>
        <h2>This color is {color}</h2>
        <Link to="/colors" className="btn-back">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default Color;
