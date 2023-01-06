import React, { useState } from 'react';
import './NewColorForm.css';
const NewColorForm = () => {
  return (
    <div className="form-container">
      {/* onSubmit={handleSubmit} */}
      <form>
        <div className="form-input-container">
          <label htmlFor="color">Enter Color Text:</label>
          <input
            id="color"
            type="text"
            name="color"
            // value={}
            placeholder="Enter Color"
            className="form-input"
            // onChange={handleChange}
          />
        </div>

        <div className="form-input-container">
          <label htmlFor="selectedColor">Select your favorite color:</label>
          <input
            type="color"
            id="selectedColor"
            name="selectedColor"
            value="#ff0000"
            // onChange={handleChange}
          />
        </div>

        <button className="form-submit-btn">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
