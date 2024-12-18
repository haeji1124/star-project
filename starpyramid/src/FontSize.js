import React from "react";

const FontSize = ({ options, onOptionsChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onOptionsChange({
      ...options,
      [name]: value,
    });
  };
  return (
    <div>
      <label htmlFor="font-size">폰트 크기</label>
      <input
        type="range"
        name="fontSize"
        id="font-size"
        min="10"
        max="100"
        step="10"
        value={options.fontSize}
        onChange={handleChange}
      />
    </div>
  );
};

export default FontSize;
