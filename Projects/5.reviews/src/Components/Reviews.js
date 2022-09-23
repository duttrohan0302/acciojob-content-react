import React, { useState } from "react";
import people from "../Resources/data";
import {FaQuoteRight} from "react-icons/fa"
import ButtonComponent from "./ButtonComponent";

function Reviews() {

    const [index, setIndex] = useState(0);

    const [persons,setPersons] = useState(people)

    const { id, name, job, text, image} = persons[index];

    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random()*persons.length)
        if(randomIndex===index){
            randomIndex=(randomIndex+1)%persons.length;
        }
        setIndex(randomIndex)
    }
    const prevPerson = () => {
        let newIndex = index-1;
        if(newIndex<0){
            newIndex = persons.length - 1;
        }
        setIndex(newIndex);
    }
    
    const nextPerson = () => {
        let newIndex = index+1;
        if(newIndex >= persons.length){
            newIndex = 0;
        }
        setIndex(newIndex)
    }

    const deletePerson = (id) => {

        if(persons.length>1){
            const newPeople = persons.filter(person=>person.id!==id);
            let newIndex = index+1;
            if(newIndex>=newPeople.length){
                newIndex = 0
            }
            setIndex(newIndex)
            setPersons(newPeople)
        }else{
            alert("Only 1 person remaining, can't delete them")
        }

    }
    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon" onClick={()=>deletePerson(id)}>
                <FaQuoteRight />
            </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>

            <ButtonComponent totalPeople={persons.length} randomPerson={randomPerson} prevPerson={prevPerson} nextPerson={nextPerson}/>
        </article>
    );
}

export default Reviews;
