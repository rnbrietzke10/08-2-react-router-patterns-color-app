import React, { useState } from 'react';
import './NewColorForm.css';

import { useNavigate } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    colorName: '',
    colorCode: '#000000',
  };
  const [colorData, setColorData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    e.persist();
    setColorData((colorInfo) => ({
      ...colorInfo,
      [e.target.name]: e.target.value,
    }));

    console.log(colorData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addColor({
      colorName: colorData.colorName,
      colorCode: colorData.colorCode,
    });
    setColorData(INITIAL_STATE);
    navigate('/colors');
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label htmlFor="colorName">Enter Color Text:</label>
          <input
            id="colorName"
            type="text"
            name="colorName"
            value={colorData.colorName}
            placeholder="Enter Color Name"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <div className="form-input-container">
          <label htmlFor="colorCode">Select your favorite color:</label>
          <input
            type="color"
            id="colorCode"
            name="colorCode"
            value={colorData.colorCode}
            onChange={handleChange}
          />
        </div>

        <button className="form-submit-btn">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
