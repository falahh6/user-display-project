import React, { useState } from 'react';
import './App.css';
import UserInput from './Components/UserInput/UserInput';
import UserList from './Components/UserList/UserList';
function App() {
  const [users, setUsers] = useState([]);

  const onAddUser = (uName , uAge) =>{
    setUsers( (prevUsers => {
      return [
        ...prevUsers,
        {name : uName , age : uAge , id : Math.random.toString()}
      ];
    }));
    // console.log('from App.js : ' + users);
  } 

  return (
    <div className="App">
      <h1>User Details</h1>
      <UserInput onAddUser={onAddUser}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
