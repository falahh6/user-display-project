import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UsersList from './Components/UserList/UsersList';
function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUser = (uName , uAge) =>{
    setUsersList((prevUsers => {
      return [
        ...prevUsers,
        {name : uName , age : uAge , id : Math.random.toString()}
      ];
    }));
  } 

  return (
    <div className="App">
      <h1>User Details</h1>
      <UserInput onAddUser={onAddUser}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
//Completed project