import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ColorsIndex = () => {
  const INITIAL_STATE = [
    { colorName: 'red', colorCode: '#ff0000' },
    { colorName: 'green', colorCode: '#00ff00' },
    { colorName: 'blue', colorCode: '#0000ff' },
  ];
  const [colors, setColors] = useState(INITIAL_STATE);
  const listOfColors = colors.map((color) => (
    <li>
      <Link to={`/colors/${color.colorName}`}>{color.colorName}</Link>
    </li>
  ));
  const addColor =
    ({ colorName, colorCode }) =>
    (colors) =>
      setColors([...colors, { colorName, colorCode }]);
  return (
    <div>
      <div>
        <h1>Welcome to the Color Factory</h1>
        <Link to="/colors/new">Add Color</Link>
      </div>
      {colors ? <ul>{listOfColors}</ul> : ''}
    </div>
  );
};

export default ColorsIndex;
