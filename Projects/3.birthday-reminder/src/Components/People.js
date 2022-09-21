import React from "react";

const People = ({people}) => {

    return(
            people.map((person,index)=>{
                const { id, name, image, age} = person;
                return(
                    <div key={index} className="person">
                        <img src={image} alt={name} />
                        <div className="name">
                            <h4>{name}</h4>
                            {' '}
                            <p>{age} years</p>
                        </div>
                    </div>
                )
            })
    )
}

export default People;