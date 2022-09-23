import React, { useState } from "react";
import people from "../Resources/data";
import {FaQuoteRight} from "react-icons/fa"
import ButtonComponent from "./ButtonComponent";

function Reviews() {

    const [index, setIndex] = useState(0);

    const { name, job, text, image} = people[index];

    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random()*people.length)
        if(randomIndex===index){
            randomIndex=(randomIndex+1)%people.length;
        }
        setIndex(randomIndex)
    }
    const prevPerson = () => {
        let newIndex = index-1;
        if(newIndex<0){
            newIndex = people.length - 1;
        }
        setIndex(newIndex);
    }
    
    const nextPerson = () => {
        let newIndex = index+1;
        if(newIndex >= people.length){
            newIndex = 0;
        }
        setIndex(newIndex)
    }
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

            <ButtonComponent randomPerson={randomPerson} prevPerson={prevPerson} nextPerson={nextPerson}/>
        </article>
    );
}

export default Reviews;
