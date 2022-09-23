import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

const ButtonComponent = ({randomPerson, prevPerson, nextPerson, totalPeople}) => {
  return (
    <>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson} disabled={totalPeople===1}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson} disabled={totalPeople===1}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson} disabled={totalPeople===1}>surprise me</button>
    </>
  );
};

export default ButtonComponent