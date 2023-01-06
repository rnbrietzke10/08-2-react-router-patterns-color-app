import React from 'react';
import { Link } from 'react-router-dom';
import './ColorsIndex.css';

const ColorsIndex = ({ listOfColors }) => {
  return (
    <div className="color-list-container">
      <div className="heading-container">
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new" className="btn">
          Add Color
        </Link>
      </div>
      <div>
        <h2>Our Colors</h2>
        <ul className="color-list">{listOfColors}</ul>
      </div>
    </div>
  );
};

export default ColorsIndex;
