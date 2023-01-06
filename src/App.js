import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ColorsIndex from './ColorsIndex';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
  const INITIAL_STATE = [
    { colorName: 'red', colorCode: '#ff0000' },
    { colorName: 'green', colorCode: '#00ff00' },
    { colorName: 'blue', colorCode: '#0000ff' },
  ];
  const [colors, setColors] = useState(INITIAL_STATE);
  const listOfColors = colors.map((color) => (
    <li className="link-list-item" key={color.colorCode}>
      <Link
        to={`/colors/${color.colorName}`}
        style={{ border: `1px solid ${color.colorCode} ` }}
        className="btn"
      >
        {color.colorName}
      </Link>
    </li>
  ));
  const addColor = (newColor) => {
    setColors((colors) => [...colors, newColor]);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/colors"
          element={<ColorsIndex listOfColors={listOfColors} />}
        />
        <Route path="/colors/:color" element={<Color />} />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
      </Routes>
    </div>
  );
}

export default App;
