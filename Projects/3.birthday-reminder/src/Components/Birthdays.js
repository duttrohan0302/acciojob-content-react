import React, { useEffect, useState } from "react";
import People from "./People"
const Birthdays = ({data}) => {

    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    const clearAll = () => {
        setPeople([])
    }

    const syncPeople = () => {
        setTimeout(()=>{
            setPeople(data)
            setLoading(false)
        },2000)
    }
    const reloadAll = () => {
        setLoading(true)
        syncPeople()
    }

    useEffect(()=>{
        syncPeople()
    },[])

    const removePerson = (id) => {
        setPeople(people.filter(person=>person.id!==id))
    }

    return(
        <main>
            <section className="container">
                {
                    loading ? 
                    <h3>Loading...</h3>
                    :
                    <>
                        <h3>{people.length} Birthdays Today</h3>
                        <People people={people} removePerson={removePerson}/>
                        <button onClick={clearAll} disabled={people && people.length ? false : true}>Clear All</button>
                        {
                            !people.length ?
                            <button onClick={reloadAll}>Reload</button>
                            :
                            null
                        }
                        <div></div>
                    </>

                }
            </section>
        </main>
    )
}

export default Birthdays;