import React from "react";
import Card from "../Card/Card";

const UserList = (props) =>{
    return (
        <Card>
            <ul>
               {props.users.map( (user) = (
                <li>{user.name} : {user.age}</li>
               ))}
            </ul>
        </Card>
    )
}

export default UserList;