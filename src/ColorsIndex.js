import React from 'react';
import { Link } from 'react-router-dom';

const ColorsIndex = ({ listOfColors }) => {
  return (
    <div>
      <div>
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new">Add Color</Link>
      </div>
      {listOfColors ? <ul>{listOfColors}</ul> : ''}
    </div>
  );
};

export default ColorsIndex;
