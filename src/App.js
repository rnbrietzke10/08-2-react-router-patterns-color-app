import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import ColorsIndex from './ColorsIndex';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
  const INITIAL_STATE = { red: '#FF0000', green: '#00FF00', blue: '#0000FF' };

  const [colors, setColors] = useState(INITIAL_STATE);

  console.log(Object.keys(colors));

  const listOfColors = Object.keys(colors).map((color) => (
    <li className="link-list-item" key={color}>
      <Link
        to={`/colors/${color}`}
        style={{ border: `1px solid ${colors[color]} ` }}
        className="btn"
      >
        {color}
      </Link>
    </li>
  ));

  const addColor = (color, hex) => {
    setColors((colors) => ({ ...colors, [color]: hex }));
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/colors"
          element={<ColorsIndex listOfColors={listOfColors} />}
        />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        <Route path="*" element={<Navigate to="/colors" replace />} />
      </Routes>
    </div>
  );
}

export default App;
