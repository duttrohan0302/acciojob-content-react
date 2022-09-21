import React from "react";

const People = ({people, removePerson}) => {

    return(
            people.map((person,index)=>{
                const { id, name, image, age} = person;
                return(
                    <div key={index} className="person">
                        <img src={image} alt={name} />
                        <div className="name">
                            <h4>{name}
                            <span>
                                <i style={{color: "red"}} className="fa fa-times" aria-hidden="true" onClick={()=>removePerson(id)}></i>
                            </span>
                            </h4>
                            {' '}
                            <p>{age} years</p>
                        </div>
                    </div>
                )
            })
    )
}

export default People;