import React from "react";

const StarNum = ({ options, onOptionsChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onOptionsChange({
      ...options,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="number"
        placeholder="피라미드 높이입력"
        name="height"
        value={options.height}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default StarNum;
