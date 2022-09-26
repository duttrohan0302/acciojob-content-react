import React from "react";

const Categories = ({categories}) => {

    return(
        <div className="btn-container">
            {
                categories.map((category,index)=>(
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories;