import React from "react";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"

const ButtonComponent = () => {
  return (
    <>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">surprise me</button>
    </>
  );
};

export default ButtonComponent