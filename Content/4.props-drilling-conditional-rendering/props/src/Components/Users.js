import React from "react";
import User from "./User"

function Users(props){

    const {users,count} = props
    return(
        <>
            <h1 className="d-flex justify-content-center">Users</h1>
            <table className="table border">
                <thead>
                    <tr className="column border">
                        <td>Id</td>
                        <td>Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=><User key={user.id} user={user} count={count} />)
                    }
                </tbody>
            </table>
        </>
        
    )
}

export default Users;