import React , { useState } from "react";
import Card from "../Card/Card";
import Button from "../UI/Button";

import styles from './UserInput.module.css';

const UserInput = (props) =>{

    const [name , setName] = useState('');
    const [age , setAge] = useState('');

    function formSubmitHandler(event){
        event.preventDefault();
        console.log(name, age);
        if( name.trim().length === 0 || age.length === 0 ){
            alert("Please Enter user details");
        }
        setName('');
        setAge('');
        // const user = {name : name , age : age}
        props.onAddUser(name, age);
    }

    
    const inputNameHandler = (event) =>{
        setName(event.target.value);
    }
    const inputAgeHandler = (event) =>{
        setAge(event.target.value);
    }

    return (
        <Card>
            <form  onSubmit={formSubmitHandler}  action="" className={styles['form-control']}>
                <label htmlFor="">Enter User Name : </label>
                <input value={name} onChange={inputNameHandler} type="text" />

                <label htmlFor="">Enter User Age : </label>
                <input value={age} onChange={inputAgeHandler} type="number" />

                <Button>Add User</Button>
            </form>
        </Card>
    )
}

export default UserInput;