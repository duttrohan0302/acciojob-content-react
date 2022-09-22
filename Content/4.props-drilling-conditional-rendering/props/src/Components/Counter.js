import React from "react";

const Counter = ({count, incrementCount, decrementCount}) => {

    return(
        <div className="d-flex justify-content-center my-3">
            <button className="btn btn-warning p-2" style={{width:"500px", marginRight:"30px"}} onClick={decrementCount}>-</button>
            <span className="mt-2">{count}</span>
            <button className="btn btn-success p-2" style={{width:"500px", marginLeft:"30px"}} onClick={incrementCount}>+</button>
        </div>
    )
}

export default Counter;