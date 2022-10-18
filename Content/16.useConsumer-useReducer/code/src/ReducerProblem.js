import { useState } from "react";

let numbers = [1,2,3];

let sum = numbers.reduce((total, number)=>{
    return total+number;
},0)
console.log(sum)

const ReducerProblem = () => {

    const [state, setState] = useState({
        username: "Rohan",
        isAuth: true
    })

    const handleLogin = () => {
        setState(oldState=>({...oldState,isAuth: true}))
    }
    const handleLogout = () => {
        setState(oldState=>({...oldState,isAuth: false}))
    }
    return(
        <>
            Current user: {state.username}, isAuthenticated: {state.isAuth ? "Yes" : "No"}
            <br />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ReducerProblem;