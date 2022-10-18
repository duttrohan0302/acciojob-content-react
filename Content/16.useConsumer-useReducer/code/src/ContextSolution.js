import React, {useContext, useState} from "react";
import {UserContext, CityContext} from "./context";

function ContextSolution() {
    const [user,setUser] = useState("Rohan Dutt")
    const [city,setCity] = useState("New Delhi")
  return (
    <UserContext.Provider value={user}>
        <CityContext.Provider value={city}>
            <h1>Hey {user} in {city} in main component</h1>
            <Component2 />
        </CityContext.Provider>
    </UserContext.Provider>
  );
}

const Component2 = () => {
    return(
        <>
            <div>In component 2</div>
            <Component3/>
        </>
    )
}

const Component3 = () => {
    return(
        <>
            <div>In component 3</div>
            <Component4/>
        </>
    )
}

const Component4 = () => {
    return(
        <>
            <div>In component 4</div>
            <Component5/>
        </>
    )
}

const Component5 = () => {
    return(
        <div>
            <UserContext.Consumer>
                {
                    (user)=> (
                        <CityContext.Consumer>
                            {
                                (city) => <h3>In component 5 with {user} in {city}</h3>
                            }
                        </CityContext.Consumer>
                    )
                }
            </UserContext.Consumer>
            <Component6 />
        </div>
    )
}

const Component6 = () => {
    const user = useContext(UserContext)
    const city = useContext(CityContext)
    return(
        <div>
            <h3>In component 6 with {user} in {city}</h3>
        </div>
    )
}
export default ContextSolution;
