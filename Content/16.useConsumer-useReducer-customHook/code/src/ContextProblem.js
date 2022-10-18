import React, {useState} from "react";

function ContextProblem() {
    const [user,setUser] = useState("Rohan Dutt")
  return (
    <>
        <h1>Hey {user} in main component</h1>
        <Component2 user={user}/>
    </>
  );
}

const Component2 = ({user}) => {
    return(
        <>
            <div>In component 2</div>
            <Component3 user={user} />
        </>
    )
}

const Component3 = ({user}) => {
    return(
        <>
            <div>In component 3</div>
            <Component4 user={user} />
        </>
    )
}

const Component4 = ({user}) => {
    return(
        <>
            <div>In component 4</div>
            <Component5 user={user} />
        </>
    )
}

const Component5 = ({user}) => {
    return(
        <div>
            In component 5 with user {user}
        </div>
    )
}
export default ContextProblem;
