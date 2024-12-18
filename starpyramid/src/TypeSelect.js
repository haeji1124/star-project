import React from "react";
import StarNum from "./StarNum";
import FontSize from "./FontSize";
import ColorType from "./ColorType";
import StarType from "./StarType";
import "./TypeSelect.css";

const TypeSelect = ({ options, onOptionsChange }) => {
  return (
    <>
      <StarType options={options} onOptionsChange={onOptionsChange} />
      <ColorType options={options} onOptionsChange={onOptionsChange} />
      <FontSize options={options} onOptionsChange={onOptionsChange} />
      <StarNum options={options} onOptionsChange={onOptionsChange} />
    </>
  );
};

export default TypeSelect;
