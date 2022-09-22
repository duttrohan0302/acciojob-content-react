import React from "react";

function User(props){

    const {user,count} = props
    if(user.id>count){
        return null
    }
    return(
        <tr className="column border">
            <td>{user.id}.</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
        </tr>
    )
}

export default User;