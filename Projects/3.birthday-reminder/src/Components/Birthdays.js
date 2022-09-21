import React, { useEffect, useState } from "react";
import People from "./People"
const Birthdays = ({data}) => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setPeople(data)
            setLoading(false)
        },3000)
    },[data])

    return(
        <main>
            <section className="container">
                {
                    loading ? 
                    <h3>Loading...</h3>
                    :
                    <>
                        <h3>{people.length} Birthdays Today</h3>
                        <People people={people}/>
                        <button>Clear All</button>
                        <div></div>
                    </>

                }
            </section>
        </main>
    )
}

export default Birthdays;