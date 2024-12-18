import React from "react";
import "./StarPrint.css";

const StarPrint = (props) => {
  return (
    <div className="pyramid">
      {props.pyramid.map((star, index) => (
        <div
          key={index}
          style={{
            fontSize: `${props.options.fontSize}px`,
            color: props.options.color,
            paddingLeft: `${star.spaces}ch`,
          }}
        >
          {star}
        </div>
      ))}
    </div>
  );
};

export default StarPrint;
