import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const ButtonComponent = ({randomPerson, prevPerson, nextPerson}) => {
  return (
    <>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </>
  );
};

export default ButtonComponent