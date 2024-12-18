import React from "react";

const ColorType = ({ options, onOptionsChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onOptionsChange({
      ...options,
      [name]: value,
    });
  };
  return (
    <div>
      <label htmlFor="start-color">별 폰트 색상</label>
      <br />
      <input
        type="color"
        name="color"
        id="start-color"
        value={options.color}
        onChange={handleChange}
      />
    </div>
  );
};

export default ColorType;
