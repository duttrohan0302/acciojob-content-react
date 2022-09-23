import React, { useState } from "react";
import people from "../Resources/data";
import {FaQuoteRight} from "react-icons/fa"
import ButtonComponent from "./ButtonComponent";
function Reviews() {

    const [index, setIndex] = useState(0);

    const { id, name, job, text, image} = people[index];


    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon">
                <FaQuoteRight />
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <ButtonComponent />
        </article>
    );
}

export default Reviews;
