import React from "react";
import Card from "../Card/Card";

const UsersList = (props) => {

    console.log(props.users);
    return (
      <Card>
        <ul>
          {/* {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))} */}
        </ul>
      </Card>
    );
  };

export default UsersList;