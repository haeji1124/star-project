import React from "react";
import "./StarType.css";
import StarImage1 from "./별타입1.png";
import StarImage2 from "./별타입2.png";
import StarImage3 from "./별타입3.png";
import StarImage4 from "./별타입4.png";
import StarImage5 from "./별타입5.png";

const StarType = ({ options, onOptionsChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onOptionsChange({
      ...options,
      [name]: value,
    });
    console.log(name, value);
  };
  return (
    <>
      <fieldset>
        <legend>별 타입 선택</legend>
        <div className="radios">
          <div className="radio">
            <input
              type="radio"
              id="type1"
              name="type"
              value="1"
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="type1">
              <img src={StarImage1} alt="type1" />
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="type2"
              name="type"
              value="2"
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="type2">
              <img src={StarImage2} alt="type2" />
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="type3"
              name="type"
              value="3"
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="type3">
              <img src={StarImage3} alt="type3" />
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="type4"
              name="type"
              value="4"
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="type4">
              <img src={StarImage4} alt="type4" />
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="type4"
              name="type"
              value="5"
              onChange={handleChange}
            />
            <label className="radio-label" htmlFor="type5">
              <img src={StarImage5} alt="type5" />
            </label>
          </div>
        </div>
      </fieldset>
    </>
  );
};

export default StarType;
