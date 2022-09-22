import React from "react";

const Counter = ({ count, incrementCount, decrementCount,userCount }) => {
    console.log(count)
  return (
    <div className="d-flex justify-content-center my-3">
      <button
        className={`btn btn-warning p-2 ${count>0 ? "btn-valid" : "btn-invalid"}`}
        style={{ width: "500px", marginRight: "30px" }}
        onClick={decrementCount}
        disabled={count<=0}
      >
        -
      </button>
      <span className="mt-2">{count}</span>
      <button
        className="btn btn-success p-2"
        style={{ width: "500px", marginLeft: "30px" }}
        onClick={incrementCount}
        disabled={count>=userCount}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
